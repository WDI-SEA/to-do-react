import React, {Component} from 'react'

class ListItem extends Component {
    render() {
        return (
            <div>
                <h3>Make a List</h3>
                <li>{this.props.doThis}</li>
            </div>
        
        )
    }
}


export default ListItem