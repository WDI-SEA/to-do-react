import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'
import SearchBox from './searchBox'

class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((item,index) => {
       return <ListItem task={item} key={index} />
    })
    return (
      <div>
        <h1>Things I should stop procrastinating</h1>
        <ul>
        {toDoItems}
        </ul>
        <SearchBox />
     
      </div>
    )
  }
}

export default MyList