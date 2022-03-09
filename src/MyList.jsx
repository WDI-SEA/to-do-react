import React, { Component } from 'react';
import ListItem from './components/ListItem';

import './App.css';

class MyList extends Component {
  render(){
    let todoItems = this.props.theList.map((item, idx) => {
     return <ListItem task={item} key={`task- ${idx}`} />
    })
    return (
      <div className="App App-header">
        <h1> Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
      </div>
  );
  }
}

export default MyList;
