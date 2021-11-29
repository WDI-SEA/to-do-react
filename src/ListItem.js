import React, { Component } from 'react'
import './index.css'

class ListItem extends Component {
    render() {
        return(
            <div>
                <li>{this.props.task}</li>
            
            </div>
        )
    }
}


export default ListItem