import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div className="container">
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          <ListItem task='Buy ice cream'/>
        </ul>
      </div>
    )
  }
}

export default MyList;