import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link , Navigate, useNavigate} from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area"
import service from '@/appwrite/config';
import { useState } from 'react';

function UserPosts({$id , content , userId}) {
  const naviagte = useNavigate()

  const deletePost = ()=>{
    service.deletePost($id)
    .then(()=>{
      naviagte("/allposts")
    })
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
  }

  return (
    <div className="block w-full">
      <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">From: {userId}</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600">
            <Link to={`/edit-post/${$id}`}>Edit</Link>
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600" onClick={deletePost} >Delete</button>
        </div>
        <ScrollArea className="h-[250px] md:h-[250px] lg:h-[250px] xl:h-[300px] md:w-[450px] overflow-y-auto">
          <p className="text-gray-800">{content}</p>
        </ScrollArea>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <Link to={`/post/${$id}`}>Expand</Link>
        </button>
      </div>
    </div>
  )
}

export default UserPosts
