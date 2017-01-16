import React from 'react';
import {Link} from 'react-router';
import store from '../store';

const Circle = props => (
  <Link to={`/info/${props.post}`}>
    <circle className={props.post === store.getState().activePath ? 'circle active-circle' : 'circle'}  cx={props.cx} cy={props.cy}  stroke="10"  />
  </Link>
);

export default Circle;
