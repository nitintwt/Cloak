import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '@/appwrite/config'
import Comment from './comment/Comment'
import RetrieveComments from './comment/RetrieveComments'
import UserName from './username/UserName'

function Post() {
  const [post , setPost]= useState(null)
  const {navigate}= useNavigate()
  const {id} = useParams()


  useEffect(()=>{
    if (id){
      const fetchPost = async ()=>{
        try {
          const data = await service.getPost(id)
          if (data){
            setPost(data)
          } else navigate("/")
        } catch (error) {
          console.error("error:", error)
        }
      }
      fetchPost()
    }
  },[id , navigate])

  return post ? (
    <div className='container  my-8'>
    <div className='bg-white p-8 rounded-md shadow-md'>
      <div className='text-2xl font-semibold mb-4'>{post.content}</div>
      <hr className='my- border-t border-gray-300 ml-2 mt-4' />
      <Comment postId={id}/>
      <RetrieveComments postId={id} />
    </div>

  </div>
) : <div>Loading...</div>;

}

export default Post
