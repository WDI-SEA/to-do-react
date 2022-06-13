import React, {Component} from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }
  clearList = () => {
    console.log('clearing list')
    this.setState({
      taskArray: []
    })
  }
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    let newList = this.state.taskArray
    newList.push(this.state.newItem)
    this.setState({taskArray: newList, newItem:''})   
  }

  render() {
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
      
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
          <button type="submit">Add To List</button>
        </form>
        <ul>
            {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear List</button>
      </div>
      )
  }
}

export default MyList