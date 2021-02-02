import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {	
	render() {
		const {dealName, onItemDeleted, toggleImportant, toggleDone, done, important} = this.props;

		let classNames = "todo-list-item";

		if(done) {
			classNames += ' done'; 
		}
		if(important) {
			classNames += ' important'; 
		}
		
		return (
			<span className={classNames}>
				<span className="todo-list-item-dealName"
							onClick={toggleDone} >
					{dealName}
				</span>
	
				<button type="button"
								className="btn btn-outline-success btn-small"
								onClick={toggleImportant} >
					<i className="fa fa-exclamation" />
				</button>
	
				<button type="button"
								className="btn btn-outline-danger btn-small"
								onClick={onItemDeleted} >
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}