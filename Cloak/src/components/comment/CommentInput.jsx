import {useState} from 'react';

function CommentInput({onComment}){
  
  return (
    <div className='flex flex-col mt-4 '>
      <input type="text" placeholder='comment karde bhai' className='border-[1px] border-zinc-400 p-4 mb-3  ' value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
      <button className='border-[1px] rounded-full border-zinc-400 w-20 ' onClick={()=>{
        onComment(); 
        }}>comment</button>
    </div> 
  )
}

export default CommentInput;