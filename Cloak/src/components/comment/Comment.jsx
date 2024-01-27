import React, { useState } from 'react'

const dummycomments =[
  {
    id:Date.now(),
    body:"First comment",
  },
  {
    id:Date.now(),
    body:"Second comment"
  }

]

function Comment() {
  const [comments , setComments] = useState([dummycomments])
  return (
    <div className='flex flex-col'>
      <input type="text" placeholder='comment karde bhai' className='border-[1px] border-zinc-400 p-4 w-3/4' />
      <button className='border-[1px] rounded-full border-zinc-400 w-20'>comment</button>
    </div>
    
  )
}

export default Comment
