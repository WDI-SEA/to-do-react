import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Read", "Study", "Study some more"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)