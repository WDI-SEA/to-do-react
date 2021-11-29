import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["More wine", "Drink more water", "Read over documents from old SEI lessons", "Sleep at 11PM", "Wake up at 6:15AM to workout Monday thru Friday", "No more eating meat", "Read every night"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
