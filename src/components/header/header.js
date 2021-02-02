import React from 'react';
import './header.css';

const Header = ({toDo, done}) => {
	return ( 
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
			<h1 className="header">Todo List</h1>
			<p className="deal-info"><strong>{toDo}</strong> more to do, <strong>{done}</strong> done</p>
		</div>
	)
}

export default Header;