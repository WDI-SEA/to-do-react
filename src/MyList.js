import React, { Component } from 'react'
import './App.css'

import ListItem from "./components/ListItem"

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (  
        <ListItem 
        task={item} 
        key={index}/>    
    ))
    return (
      <div>
        <h1>
          Things to do every day:
        </h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList;
