import React from 'react';
import CommentForm from '../Comments/CreateComment'
import CommentList from '../Comments/CommentList';

const PostComments = ({ postId }) => {
  return (
    <div>
      <CommentForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostComments;