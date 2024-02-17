import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'

function PostCard({$id, content, userId}) {

  return (
    <Link to={`/post/${$id}`} className="block w-full">
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">{userId}</span>
        </div>
        <ScrollArea className="h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] md:w-[450px] overflow-y-auto">
          <p className="text-gray-800">{content}</p>
        </ScrollArea>
      </div>
    </Link>
  )
}
export default PostCard