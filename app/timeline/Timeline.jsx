import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import store from '../store';
import Circle from '../circle/Circle.jsx';

const Timeline = React.createClass({
  calculateTimelineWidth() {
    return document.body.clientWidth * this.props.widthPercent;
  },
  setTimelineWidth() {
    const currentWidth = this.calculateTimelineWidth();
    this.setState({timelineWidth: currentWidth});
  },
  getInitialState() {
    return {timelineWidth: 0};
  },
  componentDidMount() {
    this.setTimelineWidth();
    window.addEventListener("resize", this.setTimelineWidth);
   },
  render() {
    const {posts, widthPercent} = this.props;
    const lastPost = posts[posts.length - 1];
    const firstPost = posts[0];
    const yearSpread = lastPost.year - firstPost.year;
    return (
      <div id='timeline-container'>
        <svg id='timeline-svg' height="110" width={this.state.timelineWidth}>
          <line x1="10" y1="50" x2={this.state.timelineWidth} y2="50" style={{stroke:'black', strokeWidth:2}} />
          {this.props.posts.length > 0 ? this.props.posts.map((post, indx, [firstPost, ...posts]) => {
            //calculate current post's x coordinate proportional to first year on timeline
            const ratio = (post.year - firstPost.year) /  yearSpread * this.state.timelineWidth;
            //render the timeline node as a circle svg
            return <Circle key={indx} post={post.path} cx={ratio} cy="50"/>
           }): null}
        </svg>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Timeline);
