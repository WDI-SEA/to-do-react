import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';


let toDo = ["Broil Salmon", "Clean Room", "Fix Project 2", "Watch the new episodes of Insecure", "Listen to Adele's Album"]
ReactDOM.render(
  <MyList theList={toDo}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
