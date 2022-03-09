import "./App.css";
import React, { Component } from "react";
import ListItem from './ListItem'

export default class MyList extends Component {
  render() {


    const thingsToDo = this.props.theList.map((element, index)=>{
      return <ListItem toDo={element}key={`listItem-${index}`} />
    })

    return (
      <>
        <header>
          <h1>Things I should stop procastinating:</h1>
          <ul>
            {thingsToDo}
          </ul>
        </header>
      </>
    );
  }
}
