import React from 'react';
import store from '../store';

const FullText = (props) => (
 <div className="full-text-page">
   <h1>Full Text</h1>
   {store.getState().posts.reduce((allPosts, post, reduceIndx) => {
     return [...allPosts, ...post.text.map((text, indx) => (<p key={'key' + reduceIndx + indx}>{text}</p>))]
   }, [])}
 </div>
);

export default FullText;
