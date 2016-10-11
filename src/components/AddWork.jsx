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
				<form>
					<fieldset>
						<legend>Добавить новый проект: </legend>
						<label>
							Наименование проекта: <br />
							<input ref='workName' type='text' required />
						</label><br />
						<label>
							Описание проекта: <br />
							<textarea ref='workDescription' required></textarea>
						</label><br />
						<label>
							Ссылка на проект: <br />
							<input ref='workLink' type='text' required />
						</label> <br />
						<label>
							Загрузить фото работы: <br />
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
