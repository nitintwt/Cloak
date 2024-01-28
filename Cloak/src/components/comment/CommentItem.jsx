import React from 'react';

function CommentItem({ comment }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-full'>
      <div className='comment-body'>
        <span>{comment.body}</span>
      </div>
    </div>
  );
}

export default CommentItem;


