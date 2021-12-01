import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        return (
            <div>
                <form for = "list">
                    <input type = "text" placeholder ="Type an item here"></input>
                    <button type = "submit">Add it</button>
                    </form>
                    <button type = "submit">Finished the list</button>
                 </div>
        )
    }
}

export default SearchBox