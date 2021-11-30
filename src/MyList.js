import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem'



class MyList extends Component {
  render () {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
  })

  return (
    <div className="MyList">
     <h1>Things I Absolutely MUST Do:</h1>
     <ul>
       {todoItems}
     </ul>
    </div>
  );
}
}

export default MyList;
