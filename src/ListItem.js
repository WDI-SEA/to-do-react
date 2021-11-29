import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
  render() {
    return(<li className="listItem">{this.props.task}</li>)
  }
}

export default ListItem