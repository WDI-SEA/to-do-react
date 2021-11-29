import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
    render() {
        return(
            <div>
                <li className='toDo'>{this.props.task}</li>
            </div>
        )
    }
}

export default ListItem