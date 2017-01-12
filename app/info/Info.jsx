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
  return <div className='info-container'>
    <div className='arrow-container'><Link to={`/info/post${prevPost}`}><MdChevronLeft className={prevPost > 0 ? 'arrow' : 'hidden-arrow'}/></Link></div>
    <div className='info-text'>
      <p>{props.currentPost.text}</p>
    </div>
    <div className='arrow-container'><Link to={`/info/post${nextPost}`}><MdChevronRight className={nextPost <= props.postsLength ? 'arrow' : 'hidden-arrow'}/></Link></div>
  </div>
};


const mapStateToProps = (state, ownProps) => ({
  currentPost: state.posts.find(post => post.path === state.currentInfo),
  activePath: state.activePath,
  postsLength: state.posts.length
})

export default connect(mapStateToProps)(Info);
