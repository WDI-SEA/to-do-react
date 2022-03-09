import React, {Component} from "react";

class ListItem extends Component {
    render(){
        return(
             <li>{this.props.toDo}</li>
        )
        
    }
}

export default ListItem;