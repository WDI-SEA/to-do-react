import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 3. change from App to MyList
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

// 14. make an array of strings that represent your todo items
const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <React.StrictMode>
  {/*4. change from App to MyList  */}
  {/* 15. pass the above array into the MyList component */}
    <MyList theList={toDos} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
