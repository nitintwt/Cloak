import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'

function PostCard({$id, content}) {

  return (
    <Link to={`/post/${$id}`} className="block w-full">
    <div className="flex p-4 border rounded-md mb-4">
      <ScrollArea className="h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] md:w-[450px]">
        {content}
      </ScrollArea>
    </div>
  </Link>

  )
}

export default PostCard