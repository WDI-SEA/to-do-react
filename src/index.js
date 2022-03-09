import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';


const toDos = ["homework", "herbal tea", "yoga", "meditation"]

ReactDOM.render(
    <MyList theList={toDos} />,
  document.getElementById('root')
);

