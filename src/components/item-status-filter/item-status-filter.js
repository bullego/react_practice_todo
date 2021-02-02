import React, { Component } from 'react';
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
	btnArr = [
		{filterName: 'all', btnName: 'All'},
		{filterName: 'active', btnName: 'Active'},
		{filterName: 'done', btnName: 'Done'}
	];
	
	render() {
		const {filter, onFilterHandler} = this.props;

		const buttons = this.btnArr.map(({filterName, btnName}) => {
			const isActive = filter === filterName;
			const styleActive = isActive ? 'btn-info' : 'btn-outline-secondary';

			return (
				<button type="button"
								className={`btn ${styleActive}`}
								key={filterName}
								onClick={() => onFilterHandler(filterName)} >
					{btnName}
				</button>
			);
		});

		return (
			<div className="btn-group  item-status-filter">
				{buttons}
			</div>
		);
	}
}