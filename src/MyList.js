import React, {Component} from 'react'
import './App.css';
import ListItem from './ListItem'

class MyList extends Component {
  render(){
    const toDoItems = this.props.theList.map((item,index) => (
      <ListItem task={item} key={index} />
    ))
    return (
      <div>
        <h1> This I should stop procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList;