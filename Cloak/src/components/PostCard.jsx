import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Link } from 'react-router-dom'
import service from '@/appwrite/config'


function PostCard({documentId, content}) {

  return (
    <a href={`/post/${documentId}`}>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">{content}</ScrollArea>
    </a>
  )
}

export default PostCard