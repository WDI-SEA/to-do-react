// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import MyList from './MyList';

// ReactDOM.render(
//   <React.StrictMode>
//     <MyList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Go to Hot Mulligan show", "Regret fast food", "Drink tea", "Running"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)

