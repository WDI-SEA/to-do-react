import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList
  }

  clearList = () => {
    console.log('Clearing the List')
    this.setState({
        taskArray: []
      })
  }

  newItemChange = (e) => {
    this.setState({newItem: e.target.value})
  }

  addItem = (e) =>{
    e.preventDefault()
    let tempTaskArray = this.state.taskArray
    tempTaskArray.push(this.state.newItem)
    this.setState({
      taskArray: tempTaskArray,
      newItem: ''
    })
  }
  
  render() {
    let toDoItems = this.state.taskArray.map((item, index) =>{
      return <ListItem doThis={item} key={`todo${index}`} />
  
    })
    return (
      <div className='MyList'>
        <h1> Things I should stop procrastinating:</h1>
        <form>
          <input
          type='text'
          placeholder='type an item here'
          onChange={(e)=>this.newItemChange(e)}
            value={this.state.newItem}
            />
            <button onClick={(e)=>this.addItem(e)}>Add It!</button>
        </form>
        <ul>
         {toDoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    )
  }
}


export default MyList
