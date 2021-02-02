import React, {Component} from 'react';
import Header from '../header';
import Search from '../search';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';

export default class App extends Component {
	minId = 100;
	
	state = {
		todoData: [
			this.createNewDeal('Drink coffee'),
			this.createNewDeal('Go for a walk'),
			this.createNewDeal('Create App')
		],
		searchText: '',
		filter: 'all' // active | all(default) | done
	}
	
	createNewDeal(text) {
		return {
			dealName: text,
			important: false,
			done: false,
			id: this.minId++
		}
	}

	addItem = (text) => {
		const newDeal = this.createNewDeal(text);

		this.setState(({todoData}) => {			
			const newArr = [...todoData, newDeal];

			return {
				todoData: newArr
			};
		});
	};

	deleteItem = (id) => {		
		this.setState(({todoData}) => {
			const index = todoData.findIndex((el) => el.id === id);
			const resultArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

			return {
				todoData: resultArr
			};			
		});
	};

	toggleProperty(arr, id, propName) {
		const index = arr.findIndex((el) => el.id === id);

		//update object
		const oldItem = arr[index];
		const newItem ={...oldItem, [propName]: !oldItem[propName]};

		//construct new array
		return [
			...arr.slice(0, index),
			newItem,
			...arr.slice(index+1)
		]
	}
	
	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};

	search(dealsArr, searchText) {
		if(searchText.length === 0) {
			return dealsArr;
		}
		
		return dealsArr.filter((el) => {
			return el.dealName.indexOf(searchText) > -1;
		});
	};

	onSearchHandler = (text) => {
		this.setState({searchText: text});
	};

	filter(dealsArr, filterName) {
		switch(filterName) {
			case 'all':
				return dealsArr;
			case 'active':
				return dealsArr.filter((el) => !el.done);
			case 'done':
				return dealsArr.filter((el) => el.done);
			default:
				return dealsArr;
		}
	}

	onFilterHandler = (filterName) => {
		this.setState({filter: filterName});
	}

	render() {
		const {searchText, todoData, filter} = this.state;
		const visibleDeals = this.filter(this.search(todoData, searchText), filter);
		
		const doneCount = todoData.filter((el) => el.done === true).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="app">
				<Header toDo={todoCount} done={doneCount} />

				<Search onSearchHandler={this.onSearchHandler}/>
				
				<ItemStatusFilter	filter={filter}
													onFilterHandler={this.onFilterHandler} />

				<TodoList todos={visibleDeals} 
									onDeleted={this.deleteItem}
									toggleImportant={this.onToggleImportant}
									toggleDone={this.onToggleDone} />

				<AddItem addNewDeal={this.addItem}/>
			</div>
		);
	}
};