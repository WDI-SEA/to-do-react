import React, { Component } from 'react'
import './App.css'

import ListItem from "./components/ListItem"

class MyList extends Component {
  render() {
    // cosnt todoListItems = this.props.theList.map((item, index) => {
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
        <ListItem task="Buy ice cream"/>
        </ul>
      </div>
    )
  }
}

export default MyList;
