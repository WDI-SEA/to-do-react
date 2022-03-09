import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>        
        <form><input type='text' placeholder='Type an item here'></input><button>Add it!</button>
        <br></br><button>Finished the list.</button>
        </form>
      </div>
    )
  }
}

export default MyList