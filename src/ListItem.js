// 7. import the below
import React, { Component } from 'react'
import './App.css'

// 8.
class ListItem extends Component {
    render() {
        return (
            <div>
            {/* // 9. make this component render the below: */}
            {/* // <li>Make the list!</li> */}
            {/* // 13. replace the above with our prop */}
                <li>{this.props.task}</li>
            </div>
        )
    }
}

// 10. export
export default ListItem