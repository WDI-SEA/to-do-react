// import logo from './logo.svg';
// import './App.css';

// function MyList() {
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

// export default MyList;

import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (<ListItem task={item} key={index} />))
    return (
      <div>
        <h1> Things I should stop procrastinating</h1>
        <div className='listAndStuff'>
        <ul>
          {todoItems}
        </ul>
        </div>
      </div>
    )
  }
}

export default MyList
