import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem'


class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((item, index) => (
      <ListItem task={item} key={index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    ) 
  }
}

export default MyList



// REACT BOILERPLATE
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
