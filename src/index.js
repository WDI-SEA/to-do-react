import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["do laundry", "grocery shopping", "deliverables"]

ReactDOM.render(
  <MyList theList = {toDos} />,
  document.getElementById('root')
)


