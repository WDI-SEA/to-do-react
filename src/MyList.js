import { Component } from 'react'
import ListItem from './ListItem.js'

class MyList extends Component {
    render() {
        let todoItems = this.props.theList.map((item,index)=>{
            return <ListItem 
                key={`ListItem-${index}`}
                task={item}
            />
        })
        return(
            <div>
                <h1>Things I should stop procrastinating</h1>
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
}

export default MyList
