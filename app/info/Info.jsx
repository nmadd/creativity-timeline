import React from 'react';
import {connect} from 'react-redux';

const Info = (props) => (
  <div>
    <p>{props.currentInfo.text}</p>
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  currentInfo: state.currentInfo
})

export default connect(mapStateToProps)(Info);
