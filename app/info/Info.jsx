import React from 'react';
import {connect} from 'react-redux';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import {Link} from 'react-router';

const Info = (props) => {
  let prevPost = parseInt(props.activePath.split('').pop());
  prevPost -= 1;
  let nextPost = parseInt(props.activePath.split('').pop());
  nextPost += 1;
  return <div>
    <Link to={`/info/post${prevPost}`}><MdChevronLeft/></Link>
    <p>{props.currentPost.text}</p>
    <p>{props.currentPost.year}</p>
    <Link to={`/info/post${nextPost}`}><MdChevronRight/></Link>
  </div>
};


const mapStateToProps = (state, ownProps) => ({
  currentPost: state.posts.find(post => post.path === state.currentInfo),
  activePath: state.activePath
})

export default connect(mapStateToProps)(Info);
