import { Component } from 'react';

export default class ListItem extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <li>{this.props.task}</li>
      </div>
    )
  }
}
 

