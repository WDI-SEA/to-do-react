import React, { Component } from 'react'
import ListItem from './ListItem';
import './App.css'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem task={item} key={index}/>
    ))

    return (
      <div className="listDisplay">
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList
