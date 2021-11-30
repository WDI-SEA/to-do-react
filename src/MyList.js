import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'


class MyList extends Component {
  
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem task={item} key={index} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li>
            {todoItems}
          </li>
          <form>
            <label htmlFor="newItem"></label>
            <input type="text" name="newItem" id="newItem" value="" />
            <button>Add it</button>
          </form>
            <button>Finished the List!</button>
        </ul>
      </div>
    )
  }
}

export default MyList
