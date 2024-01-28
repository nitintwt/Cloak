import { useState } from "react";
import CommentInput from "./CommentInput";
import CommentItemss from "./CommentItemss";


function CommentItem({comment}){
  const [isReplying , setIsReplying]= useState(false);
  const [comments , setComments]=useState(comment.comments)

  const onComment =(newComment)=>{
    setComments((prev) =>[newComment, ...prev])

  }
  return (
    <div className='flex flex-col border-[1px] border-zinc-500 rounded-md p-3 my-4'>
    <span >{comment.body}</span>
    <div className='mb-3'>
      {isReplying ?
      (<button className='border-[1px] rounded-full border-zinc-400 w-20'onClick={()=>setIsReplying(false)}>cancel</button>)
      :
      (<button className='border-[1px] rounded-full border-zinc-400 w-20'onClick={()=>setIsReplying(true)}>Reply</button>)
      }
    </div>
    {isReplying && <CommentInput onComment={onComment}/>}
    <div className='flex flex-col gap-3'>
    {comments.map((comment )=>(
          <CommentItemss comment={comment}/>
          ))}
    </div>
    </div>
  )
}

export default CommentItem;


