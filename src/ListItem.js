import { Component } from 'react'

class ListItem extends Component {
    render() {
        return(<li>{this.props.task}</li>)
    }
}

export default ListItem