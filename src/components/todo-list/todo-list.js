import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted, toggleImportant, toggleDone}) => {	
	const elements = todos.map((item) => {
		const { id, ...itemProps} = item;		

		return(
			<li key={id} className="list-group-item">
				<TodoListItem	{...itemProps}
											onItemDeleted={() => onDeleted(id)}
											toggleImportant={() => toggleImportant(id)}
											toggleDone={() => toggleDone(id)} />
			</li>
		)
	});

	return (
		<ul className="list-group todoList">
			{elements}		
		</ul>
	);
};

export default TodoList;