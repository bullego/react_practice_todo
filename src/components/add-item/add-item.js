import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {
	state = {
		deal: ''
	};

	onDealChange = (e) => {
		this.setState({
			deal: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addNewDeal(this.state.deal);

		this.setState({
			deal: ''
		});
	};
	
	render() {
		return (
			<form className='form-wrap'
						onSubmit={this.onSubmit}>
				<input type='text' 
							 className='form-control'
							 onChange={this.onDealChange}
							 placeholder='Write your a new deal'
							 value={this.state.deal} />

				<button type='submit' 
								className='btn add-item'>
						Add a new deal
				</button>
			</form>
		);
	};
};