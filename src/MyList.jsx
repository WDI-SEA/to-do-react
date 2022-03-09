import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItem';


class MyList extends Component {
  render() {
    const todoItems = this.props.theList.map((items, idx) => {
      return (
        <ListItem
          task={items}
          key={`List-items-${idx}`}
        />
      )
    })

    return (
      <div>
        <h1> Things I should stop procrastinating</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList;
