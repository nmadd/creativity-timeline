import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import store from '../store';
import Circle from '../circle/Circle.jsx';

const Timeline = React.createClass({
  render() {

    return (
      <svg height="110" width="1200">
        <line x1="10" y1="50" x2="1000" y2="50" style={{stroke:'black', strokeWidth:2}} />
        {this.props.posts.length > 0 ? this.props.posts.map((post, indx, [firstPost, ...posts]) => {
          const lastPost = posts[posts.length - 1];
          const yearSpread = lastPost.year - firstPost.year;
          const ratio = (post.year - firstPost.year) /  yearSpread * 1000;
          return <Circle key={indx} post={post.path} cx={ratio} cy="50"/>

         }): null}
      </svg>
    )
  }
})





const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Timeline);
