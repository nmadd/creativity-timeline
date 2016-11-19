import React from 'react';
import {Link} from 'react-router';
import {setCurrentInfo} from '../actions';
import store from '../store';

const Circle = props => (
  <Link to="info"><circle onClick={store.dispatch.bind(this, setCurrentInfo('post2'))} className="circle"  cx="100" cy="50" r="10" stroke="10" fill='magenta'/></Link>
);

export default Circle;
