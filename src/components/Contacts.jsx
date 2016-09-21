require ('./Contacts.css');

import React from 'react';
const FontAwesome = require('react-fontawesome');

import SideBar from './SideBar.jsx';

const Contacts = React.createClass({
	render: function() {
		return(
			<div>
				<div className='container-content'>
					<div className='content__header'>Контакты</div>
					<div className='content__began'>
						<div className='red-line'></div>
					 	<div className='cyan-line'></div>
					 	<div className='gray-line'></div>
					 </div>
					<div className='content__text'>							
						<a href="https://vk.com/slobodianskii" target="_blank"><div className="contacts__card">
								<FontAwesome className="fa fa-vk" name="vkontakte" />
							</div></a>
						<a href="https://www.facebook.com/aslobodyansky" target="_blank"><div className="contacts__card">
							<FontAwesome className="fa fa-facebook" name="facebook" />
						</div></a>
						<a href="https://ru.linkedin.com/in/web2ls" target="_blank"><div className="contacts__card">
							<FontAwesome className="fa fa-linkedin" name="linkedin" />
						</div></a>
						<a href="https://github.com/web2ls" target="_blank"><div className="contacts__card">
							<FontAwesome className="fa fa-github" name="github" />
						</div></a>
						<a href="https://twitter.com/quantumofweb" target="_blank"><div className="contacts__card">
							<FontAwesome className="fa fa-twitter" name="twitter" />
						</div></a>
					 </div>					 
				</div>
				<SideBar />
			</div>

			// <div className='contacts-page'>
			// 	<div className='contacts__header'>Контакты</div>
			// 	<div className='contacts__content'>
			// 		<div className='content-began'>
			// 			<div className='red-line'></div>
			// 			<div className='cyan-line'></div>
			// 			<div className='gray-line'></div>
			// 		</div>
			// 		<p className='contacts__text'>
			// 		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			// 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			// 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			// 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			// 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			// 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			// 		</p>
			// 	</div>
			// </div>
		)
	}
});

export default Contacts;
