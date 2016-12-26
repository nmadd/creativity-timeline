import React from 'react';
import {Link} from 'react-router';
import store from '../store';

const Circle = props => (
  <Link to={`/info/${props.post}`}><circle className="circle"  cx={props.cx} cy={props.cy} r={props.post === store.getState().activePath ? 20 : 10} stroke="10" fill={props.post === store.getState().activePath ? 'black' : 'magenta'}/></Link>
);

export default Circle;
