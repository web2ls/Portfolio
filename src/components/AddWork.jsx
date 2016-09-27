import React from 'react';
import {database, storage} from '../core.js';

const fileButton = document.getElementById('fileButton');



const AddWork = React.createClass({
	handleAddNewWork: function() {
		let newWork = {
			id: new Date().getTime(),
			workName: this.refs.workName.value,
			workDescription: this.refs.workDescription.value,
			workLink: this.refs.workLink.value
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
							Наименование проекта: <input ref='workName' type='text' />
						</label><br />
						<label>
							Описание проекта: <input ref='workDescription' type='text' />
						</label><br />
						<label>
							Ссылка на проект: <input ref='workLink' type='text' />
						</label> <br />
						<label>
							Загрузить фото работы: <input
							onChange={this.handleFileInput}
							 id='fileButton'
							 ref='workImage'
							  type='file' />
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
