require('./Services.css');
import React from 'react';

import SideBar from './SideBar.jsx';
import Technology from './Technology.jsx';

const Services = React.createClass({
	render: function() {
		return (
			<div>
				<div className='container-content'>
					<div className='content__header'>Услуги</div>
					<div className='content__began'>
						<div className='red-line'></div>
					 	<div className='cyan-line'></div>
					 	<div className='gray-line'></div>
					 </div>
					<div className='content__text'>
						<div className='services__card'>
							Верстка сайта с PSD шаблона
						</div>
						<div className='services__card'>
							Кроссбраузерная валидация
						</div>
						<div className='services__card'>
							Создание адаптивной версии сайта
						</div>
						<div className='services__card'>
							Расширение функционала уже запущенного в работу сайта
						</div>
						<div className='services__card'>
							Исправление ошибок и недочетов на работающих сайтах
						</div>
					 </div>
				</div>
				<SideBar />
				<Technology />
			</div>
		)
	}
});

export default Services;
