import React from 'react';
import {Link} from 'react-router';
import store from '../store';

const circleProps = {
  transition: 'r .5s ease',
  fill: 'white',
  stroke: 'lightskyblue',
  strokeWidth: 2,
  r: 15
}

const activeCircleProps = {
  fill: 'lightskyblue',
  r: 20
}

const Circle = props => (
  <Link to={`/info/${props.post}`} className='circle-link'>
    <circle stroke='lightskyblue' strokeWidth='2' r={props.post === store.getState().activePath ? activeCircleProps.r : circleProps.r}  fill={props.post === store.getState().activePath ?  activeCircleProps.fill : circleProps.fill} className={props.post === store.getState().activePath ? 'circle active-circle' : 'circle'}  cx={props.cx} cy={props.cy}  stroke="10"  />
  </Link>
);

export default Circle;
