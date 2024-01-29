import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'

function PostCard({$id, content}) {

  return (
<Link to={`/post/${$id}`}>
  <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2'>
    <ScrollArea className="h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] w-full md:w-[50%] lg:w-[33.3333%] xl:w-[25%] rounded-md border p-4">
      {content}
    </ScrollArea>
  </div>
</Link>

  )
}

export default PostCard