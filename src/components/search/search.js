import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {	
	state = {
		searchText: ''
	};
	
	searchHandler = (e) => {
		const text = e.target.value;
		this.setState({ searchText: text});

		this.props.onSearchHandler(text);
	}
	
	render() {
		return (
			<input type='text'
						 placeholder='Enter your deal'
						 className="search"
						 value={this.state.searchText}
						 onChange={this.searchHandler} />
		);
	};
};