import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDos}/>
  </React.StrictMode>,
  document.getElementById('root')
);

