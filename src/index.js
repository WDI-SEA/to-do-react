import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';
import reportWebVitals from './reportWebVitals';
const toDoList = ['Go to the gym', 'Buy presents', 'Fix my closet' ]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDoList} />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
