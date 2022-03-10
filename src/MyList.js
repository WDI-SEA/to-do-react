import React, { Component } from 'react'
import './App.css'

import ListItem from "./components/ListItem"

class MyList extends Component {
  // do a state for updating list by the user
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }
  clearList= () =>{
    console.log('clears the list')
  this.setState({taskArray: []})
}

addItem = (e) => {
  e.preventDefault()
  console.log('New Item form has been submitted.')

  // let newList = this.state.taskArray
  // // pushingnew Item
  // newList.push(this.state.newItem)
  // // setting new state original array with pushed item
  // this.setState({
  //   taskArray: newList,
  //   newItem: ''
  //   })
    this.setState((prevState, props) =>{
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
      newItem:''
      }
    })
  }

handleChange = (e) => {
  this.setState({newItem: e.target.value}) 
}

  render() {
    let todoItems = this.state.taskArray.map((item, index) => { 
      return <ListItem task={item} key={index}/>  
    })  
    return(    
      <>
      <div>
        <h1>
          Things to do every day:
        </h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>Add a new task:</label>
            <input
            type='text'
            id='newItem'
            name='newItem'
            onChange={this.handleChange}
            value={this.state.newItem}
            />            
          <button type='submit'>Add To List</button>
        </form>
        <ul>
          {todoItems}
        </ul>        
        <button onClick={this.clearList}>Clear All Items</button>
      </div>
      </>
    )
  }
}

export default MyList;
