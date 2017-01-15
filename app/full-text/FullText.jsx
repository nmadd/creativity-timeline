import React from 'react';
import store from '../store';

const FullText = (props) => (
 <div className="full-text-page">
   <h1>Full Text</h1>
   {store.getState().posts.reduce((allPosts, post) => {
     return [...allPosts, <p>{post.text}</p>]
   }, [])}
 </div>
);

export default FullText;
