import React from 'react';

const FB = require('../firebaseAPI.js');
const auth = FB.auth;

const LogIn = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	handleAuthBtnClick: function() {		
		const email = this.refs.authName.value;
		const password = this.refs.authPasswd.value;
		auth.signInWithEmailAndPassword(email, password)
		.then(authData => {
			if (authData) {
				this.context.router.push('/admin_room/add_work');
				this.props.onAuthorizedAction(true);
			} else return;
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			this.props.onAuthorizedAction(false);
		});
	},

	render: function() {
		return (
			<div>
				<div className='auth-header'>Введите ваши данные: </div>
				<label>
					Имя пользователя: 
					<input ref='authName' type="text" />
				</label>
				<br />
				<label>
					Пароль: 
					<input ref='authPasswd' type="password" />
				</label>
				<br />
				<button onClick={this.handleAuthBtnClick} type="button">Вход</button>
			</div>
		)
	}
});

export default LogIn;