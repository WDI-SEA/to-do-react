import React, { Component } from 'react';
import './App.css'
import ListItems from './ListItems';


class MyList extends Component {
  render() {
    const toDoItems = this.props.theList.map((item, index) =>{
      return <ListItems task={item} key={index}/>
    })
    return(

      <div className="App">

        <h1>Things I should stop procrastinating: </h1>
        <ul>
          <h2>{toDoItems}</h2>
        </ul> 
      </div>
    )
  }
}

export default MyList
