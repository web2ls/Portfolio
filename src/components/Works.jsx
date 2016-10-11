require('./Works.css');
const FB = require('../firebaseAPI.js');
const database = FB.database;
const storage = FB.storage;

import _ from 'underscore';
/*import {database, storage} from '../core.js';*/
import React from 'react';
import SideBar from './SideBar.jsx';
import Work from './Work.jsx';



const Works = React.createClass({
	getInitialState: function() {
		return {
			works: {}
		}
	},

	componentWillMount: function() {
		let data = database.ref('works');
		data.once('value', (snapshot) => {
			let	a = snapshot.val();
			this.setState({works: a});
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
						{
							_.values(this.state.works).map(work => {
								return <Work key={work.id}
								workName={work.workName}
								 workDescr={work.workDescr}
								 workLink={work.workLink}
								 fileImageName={work.fileImageName} />
							})
						}
					</div>
				</div>
				<SideBar />
			</div>
		)
	}
});

export default Works;
