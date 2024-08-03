import React from 'react';
import CommentForm from '../Comments/CreateComment'
import CommentList from '../Comments/CommentList';

const PostComments = ({ postId }) => {
  return (
    <div>
      <CommentList postId={postId} />
      <hr />
      <CommentForm postId={postId} />
    </div>
  );
};

export default PostComments;