import React from 'react';
import Post from './post/post';
import ustStyles from './styles';

const Posts = () => {
  const classes = ustStyles();

  return (
    <div>
      <h2>Posts Component</h2>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
