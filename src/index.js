import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

// const toDos = ["homework", "herbal tea", "yoga", "meditation"]

ReactDOM.render(
  <React.StrictMode>
    <MyList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
