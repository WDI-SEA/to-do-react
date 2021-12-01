import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    console.log("clearing list")
    this.setState({
      taskArray: []
    })
  }

  newItemChange = (e) =>{
    this.setState({newItem: e.target.value})
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
      return <ListItem task={item} key={`todo${index}`} />
    })

    return(<div>
      <h1>Things I should stop procrastinating:</h1>
      <form>
        <input 
          type="text" 
          placeholder="type an item here"
          onChange={(e)=>this.newItemChange(e)}
          value={this.state.newItem}
        />
        <button onClick={(e)=>this.addItem(e)}>Add It!</button>
      </form>
      <ul>
        {todoItems}
      </ul>
      <button onClick={this.clearList}>Clear List</button>
    </div>)
  }
}

export default MyList
