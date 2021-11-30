import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
    render() {
        let todoItems = this.props.thisList.map((item, index) => (
            <ListItem task={item} key={index} />
          ))

        return (
            <div className="container">
                <h1> Things I should stop Procrastinating: </h1>
                <ul>
                  {todoItems}
                </ul>
            </div>
        )
    }
}

export default MyList