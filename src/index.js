import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './myList';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", 'Learn React','EAT SOMETHING']

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)


