import React, { Component } from 'react'
import '../App.css'

class ListItem extends Component {
  render() {
    return(
    <li>Make the list!</li>,
    <li>{this.props.task}</li>
    )
  }
}


export default ListItem;