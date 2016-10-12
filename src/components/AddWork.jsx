require('./AddWork.css');

import React from 'react';
const FB = require('../firebaseAPI.js');
const database = FB.database;
const storage = FB.storage;
/*import {database, storage} from '../core.js';*/

const fileButton = document.getElementById('fileButton');



const AddWork = React.createClass({
	handleAddNewWork: function() {
		const fileName = this.refs.workImage.files[0].name;
		let newWork = {
			id: new Date().getTime(),
			workName: this.refs.workName.value,
			workDescr: this.refs.workDescription.value,
			workLink: this.refs.workLink.value,
			fileImageName: fileName
		};
		database.ref('works').push(newWork);
	},

	handleFileInput: function(event) {
		var file = event.target.files[0];
		var storageRef = storage.ref('images/' + file.name);
		storageRef.put(file);
	},

	render: function() {
		return(
			<div>
				<form className='add-work-form'>
					<fieldset>
						<legend>Добавить новый проект: </legend>
						<label>
							<input 
								ref='workName' 
								type='text' 
								required
								placeholder='Наименование проекта...' />
						</label><br />
						<label>
							<textarea ref='workDescription'
								 required
								 placeholder='Описание проекта'>
							 </textarea>
						</label><br />
						<label>
							<input
							 	ref='workLink'
							  	type='text'
							   	required
							   	placeholder='Ссылка на проект' />
						</label> <br />
						<label>
							Загрузить скриншот проекта: <br />
							<input
							onChange={this.handleFileInput}
							 id='fileButton'
							 ref='workImage'
							  type='file'
								required />
						</label>
						<br />
						<button onClick={this.handleAddNewWork} type='button'>Добавить проект</button>
					</fieldset>
				</form>
			</div>
		)
	}
});

export default AddWork;
