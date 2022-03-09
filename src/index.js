import { React } from 'react';
import ReactDom from 'react-dom';
import  MyList  from "./MyList";
import './index.css'

ReactDom.render(
  <MyList />,
  document.getElementById('root')
)