import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from 'react-router-dom'

function PostCard({$id, content}) {

  return (
    <div className='container mx-auto py-8'>
    <div className='flex flex-wrap -mx-2'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
          <Link to={`/post/${post.$id}`} className="block w-full">
            <div className='border rounded-md p-4'>
              <ScrollArea className='h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px]'>
                {post.content}
              </ScrollArea>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  

  )
}

export default PostCard