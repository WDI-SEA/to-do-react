import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = ["Take out the Trash", "Fold the Laundry", "Take son to Soccer Practice"]

ReactDOM.render(
    <MyList theList={toDos} />,
  document.getElementById('root')
)

