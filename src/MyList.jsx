import { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  } 

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

  addItem = (e) => {
    e.preventDefault()
    // theList.push(this.state)
    console.log('new item form has been suvmitted')
    let newList = this.state.taskArray 
    newList.push(this.state.newItem)
    this.setState({
      taskArray: newList
    })
  }

  handleChange = (e) => {
    this.setState({newItem: e.target.value})
  }

  render() {
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
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
        <button type="submit">Add to list</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear All Items</button>
      </div>
    )
  }
}

export default MyList;
