import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state={
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
  console.log(`yo`)
      this.setState({taskArray: []})
  } 
  addItem = (e) => {
    e.preventDefault()
  console.log(`this form has been sumbitted`)
  //push new item into the task array
  //what you cannot do 
  //this.state.taskArray.push(this.state.newItem)
  let newList = this.state.taskArray
  newList.push(this.state.newItem)
  this.setState({
    taskArray: newList,
    newItem:''
  })
      
  } 
  handleChange = (e) => {
this.setState({newItem:e.target.value})

  
      
  } 

  render() {
    const todoItems = this.state.taskArray.map((item, idx) => {
      return <ListItem task={item} key={`props-${idx}`} />
    })
    
    

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>Add a new Task:</label>
          <input 
          type='text'
          id='newItem'
          name='newItem'
          onChange={this.handleChange}
          value={this.state.newItem}
          />
          <button type='submit'>Add to list</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear All Items</button>
      </div>
    )
  }
}

export default MyList