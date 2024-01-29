import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'


function PostCard({$id, content}) {

  return (
    
    <Link to={`/post/${$id}`}>
      <div className='flex space-x-2'>
       <ScrollArea className="h-[250px] w-[400px] rounded-md border p-4 ">{content}</ScrollArea>
      </div>
    </Link>
  )
}

export default PostCard