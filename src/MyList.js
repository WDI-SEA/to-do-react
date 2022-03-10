import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
	state = {
		taskArray: this.props.theList,
		newItem: ''
	};

	clearList = () => {
		console.log('Clearing list');
		this.setState({ taskArray: [] });
	};

	addItem = (e) => {
		e.preventDefault();
		// push the new task into the task array
		console.log('New item form has been submitted');
		let newList = this.state.taskArray;
		newList.push(this.state.newItem);
		this.setState({
			taskArray: newList,
			newItem: ''
		});
	};

	handleChange = (e) => {
		this.setState({ newItem: e.target.value });
	};

	render() {
		let todoItems = this.state.taskArray.map((item, index) => {
			return <ListItem task={item} key={index} />;
		});
		return (
			<div>
				<h1>Things I should stop procrastinating:</h1>
				<form onSubmit={this.addItem}>
					<label htmlFor="newItem">Add a new task:</label>
					<input
						type="text"
						id="newItem"
						name="newItem"
						onChange={this.handleChange}
						value={this.state.newItem}
					/>
					<button type="submit"> Submit</button>
				</form>

				<ul>{todoItems}</ul>
				<button onClick={this.clearList}>Clear All Items</button>
			</div>
		);
	}
}

export default MyList;
