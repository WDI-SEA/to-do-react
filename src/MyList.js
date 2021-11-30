import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>To-do list:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList