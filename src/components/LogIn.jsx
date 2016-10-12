require('./LogIn.css');
import React from 'react';

const FB = require('../firebaseAPI.js');
const auth = FB.auth;

const LogIn = React.createClass({
	getInitialState: function() {
		return {
			failLogIn: false
		}	
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	handleAuthBtnClick: function() {		
		const email = this.refs.authName.value;
		const password = this.refs.authPasswd.value;
		auth.signInWithEmailAndPassword(email, password)
		.then(authData => {
			if (authData) {
				this.context.router.push('/admin_room/');
			} else return;
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('not good yet');
			this.setState({failLogIn: true});
		});
	},

	handleClosePopupBtn: function() {
		this.setState({failLogIn: false});
	},

	render: function() {
		return (
			<div>
				<div className='login__card'>
					<div className='auth-header'>Ваши учетные данные: </div>
					<label>
						<input 
						className='username' 
						ref='authName' 
						type="text"
						placeholder='Введите имя пользователя...' />
					</label>
					<br />
					<label>
						<input 
						className='userpasswd' 
						ref='authPasswd' 
						type="password" 
						placeholder='Введите пароль...' />
					</label>
					<br />
					<button 
					className='login-btn'
					onClick={this.handleAuthBtnClick} 
					type="button">Вход</button>		
				</div>
				<div className={this.state.failLogIn ? 'black-screen' : 'hidden'}>
					<div className='login-popup__card'>
						Вы указали неверные данные для входа в систему.
						<div onClick={this.handleClosePopupBtn} className='close-login-popup'>X</div>
					</div>
				</div>				
			</div>
		)
	}
});

export default LogIn;