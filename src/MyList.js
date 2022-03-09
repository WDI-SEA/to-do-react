import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem'

export default class MyList extends Component {
  render() { 
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}
