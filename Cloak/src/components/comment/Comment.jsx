import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const dummycomments = [
  {
    id: 1,
    body: "First comment",
  },
  {
    id: 2,
    body: "Second comment",
  }
];

function Comment() {
  const [comments, setComments] = useState(dummycomments);
  const [commentBody, setCommentBody] = useState('');

  const onComment = () => {
    if (commentBody.trim() === '') {
      return
    }
    const newComment = {
      body: commentBody,
    }
    setComments((prev) => [newComment, ...prev])
    setCommentBody('')
  }

  return (
    <div className='container mx-auto mt-8 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Comments</h1>
      <div className='flex flex-col items-start space-y-4'>
        <Textarea
          placeholder="Type your comment here."
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          className="p-2 border rounded"
        />
        <Button
          onClick={onComment}
          className="bg-black text-white px-3 py-2 rounded hover:bg-white hover:text-black"
        >
          Done
        </Button>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Comment;

