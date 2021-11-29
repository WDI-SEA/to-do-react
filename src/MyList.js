import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


class MyList extends Component {
  render(){
      let todoItems = this.props.theList.map((items, index) => {
        return <ListItem task={items} key={index}/>
      })
    return(
      <div>
        <h1>Things I should stop procastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      
      </div>
    )
  }
}
export default MyList;



// Components List:
// List Items