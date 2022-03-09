import React, { Component } from 'react';
import './App.css'

class ListItems extends Component {
    render() {
        return (
            <div>
                {this.props.task}
            </div>
        )
    }
}
export default ListItems