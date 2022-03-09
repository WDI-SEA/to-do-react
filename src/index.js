import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = ["go to the gym", "do my coding hw", "my destiny"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
);


