import React, {Component} from 'react'
import './App.css'

class ListItem extends Component {
    render() {
        return(
            <div>
                {/*This gets passed down from MyList*/}
                <li>{this.props.task}</li>
            </div>
        
        )
    }
}

export default ListItem;