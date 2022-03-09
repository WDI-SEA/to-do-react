import { React } from 'react';
import ReactDom from 'react-dom';
import  MyList  from "./MyList";
import './index.css'
const toDos = ["deliverables", "drs","taxes"]

ReactDom.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)