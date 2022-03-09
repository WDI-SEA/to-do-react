import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
	render() {
		let todoItems = this.props.theList.map((item, index) => {
			return <ListItem task={item} key={index} />;
		});
		return (
			<div>
				<h1>Things I should stop procrastinating:</h1>
				<ul>{todoItems}</ul>
			</div>
		);
	}
}

export default MyList;
