import { Component } from 'react';
import ReactDom from 'react-dom';
import { MyList } from "./MyList.jsx";
import './index.css'

ReactDom.render(
  <MyList />,
  document.getElementById('root')
)