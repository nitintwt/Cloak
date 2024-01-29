import React, { useState } from 'react';
import service from '@/appwrite/config';
import CommentItem from './CommentItem';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';



function Comment({postId}) {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState('');

  const onComment = async () => {
    if (commentBody.trim() === '') {
      return alert ("comment toh likh bhai pehle , submit pehle kar raha ")
    }
    const newComment = {
      body: commentBody,
    }
    setComments((prev) => [newComment, ...prev])
    setCommentBody('')

    try {
      await service.createComment({
        comment:commentBody,
        postId:postId,
      })
    } catch (error) {
      console.error('Error creating comment:' , error)
    }
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

