import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((item, index) =>{
      return <ListItem doThis={item} key={index} />
  
    })
    return (
      <div className='MyList'>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
         {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList
