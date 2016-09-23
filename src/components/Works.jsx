require('./Works.css');

import database from '../core.js';
import React from 'react';
import SideBar from './SideBar.jsx';


const Works = React.createClass({
	componentWillMount: function() {
		let data = database.ref('works');
		data.on('value', function(snapshot) {
			let a = snapshot.val();
			console.log(a);
		});
	},

	render: function() {
		return (
			<div>
				<div className='container-content'>
					<div className='content__header'>Проекты</div>
					<div className='content__began'>
						<div className='red-line'></div>
					 	<div className='cyan-line'></div>
					 	<div className='gray-line'></div>
					 </div>
					<div className='content__text'>
						<div className='works__card'>
              works1
            </div>
            <div className='works__card'>
              works2
            </div>
            <div className='works__card'>
              works3
            </div>
					</div>
				</div>
				<SideBar />
			</div>
		)
	}
});

export default Works;
