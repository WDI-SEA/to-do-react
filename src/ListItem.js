import React, { Component } from 'react';
class ListItem extends Component {
    state = {  } 
    render() { 
        return (
            <li>{this.props.task}</li>
        );
    }
}
 
export default ListItem;