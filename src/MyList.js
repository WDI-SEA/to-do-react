import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem:""
  }

  clearList = () => {
    console.log("clearing list")
    this.setState({
      taskArray: []
    })
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    let tempTaskArray = this.state.taskArray
    tempTaskArray.push(this.state.newItem)
    this.setState({
      taskArray: tempTaskArray,
      newItem: ''  
    })
  }
  
  render() {
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li>
            {todoItems}
          </li>
          <form>
            <input type="text" 
            name="item" 
            placeholder="Type an item here"
            onChange={this.newItemChange}
            value={this.state.newItem}
             />
            <button onClick={this.addItem}>Add it</button>
          </form>
        </ul>
        {/* <button onClick={(e) => this.clearList(e)}>Finished the list!</button> */}
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}

export default MyList
