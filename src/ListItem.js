import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
    render() {
      return(<p className="list">{this.props.task}</p>)
    }
  }
  
export default ListItem
