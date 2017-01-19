import React from 'react';
import store from '../store';

const FullText = (props) => (
  <div className="full-text-page">
    <div className="flex-one"></div>
    <div className="flex-three">
      {store.getState().posts.reduce((allPosts, post, reduceIndx) => {
        return [
          ...allPosts,
          ...post.text.map((text, indx) => (
            <p key={'key' + reduceIndx + indx}>{text}</p>
          ))
        ]
      }, [])}
    </div>
    <div className="flex-one"></div>
  </div>
);

export default FullText;
