// 1. Rename App.js to MyList.js and change all the relevant info
// 2. Go to index.js and change the name of the component where its rendered
import React, { Component } from 'react'
import './App.css';
// 10. import ListItem
import ListItem from './ListItem'

// 16. use the map function to create an array of <ListItem/>s each with its own task prop that represents a todo item from theList


class MyList extends Component {
    render() {
        // 16. use the map function to create an array of <ListItem/>s each with its own task prop that represents a todo item from theList
        let todoItems = this.props.theList.map((item, index) => {
            return <ListItem key={index} task={item} />
        })
        return(
            // 5. change the contents of the HTML to have a header and the start of a list
            <div>
                <h1>Things I should stop procrastinating:</h1>
                <ul>
                    {/* 11. put ListItem here */}
                    {/* 12. pass the prop "task"-- then go call this in ListItem.js using this.props */}
                    {/* <ListItem task="Buy ice cream" /> */}
                    {/* 17. comment out the below and render the todoItems */}
                    {todoItems}
                </ul>
            </div>
        )
    }
}


export default MyList;

// 6. make a new component named ListItem
