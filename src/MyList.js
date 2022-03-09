import { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, idx) => {
      return <ListItem task={item} key={`task-${idx}`} />;
    });

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default MyList;
