import React, { useState } from 'react'
import CommentInput from './CommentInput'
import CommentItem from './commentItem'
const dummycomments =[
  {
    
    body:"First comment",
    comments:[]
  },
  {
    
    body:"Second comment",
    comments:[]
  }

]

function Comment() {
  const [comments , setComments] = useState(dummycomments)
  
  const onComment =(newComment)=>{
    setComments((prev) => [newComment, ...prev])
    }
  return (
    <div className='flex flex-col gap-6 h-screen w-screen'>
       <CommentInput onComment={onComment}/>
       <div className='flex flex-col gap-4'>
         {comments.map((comment )=>{
          <CommentItem  comment={comment}/>
          })}
        </div>
   </div>
  )
}

export default Comment;

