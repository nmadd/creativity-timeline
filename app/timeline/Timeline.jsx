import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import store from '../store';
import {setCurrentInfo} from '../actions';
import Circle from '../circle/Circle.jsx';

const Timeline = React.createClass({
  getInitialState() {
    return {color: 'magenta', radius: 10}
  },
  render() {
    return (
      <svg height="110" width="500">
        <line x1="10" y1="50" x2="200" y2="50" style={{stroke:'black', strokeWidth:2}} />
        <circle onClick={store.dispatch.bind(this, setCurrentInfo('post1'))} className="circle" cx="10" cy="50" r="10" stroke="magenta" fill="magenta"/>
        <Circle />
      </svg>
    )
  }
})

const mapStateToProps = (state, ownProps) => ({

})

export default Timeline;
