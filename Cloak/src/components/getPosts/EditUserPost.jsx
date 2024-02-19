import service from '@/appwrite/config'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Textarea } from '../ui/textarea';

function EditUserPost() {
  const {id}= useParams()
  const [post , setPost]= useState("")
  const navigate= useNavigate()


  const updatePost= async ()=>{
    await service.updatePost(id , {
      content:post
    })
     navigate('/profile')
  }

  useEffect(()=>{
    const fetchPost = async ()=>{
      try {
        const data = await service.getPost(id)
        if (data){
          setPost(data)
        }
      } catch (error) {
        console.error("error fetching post:" , error)
      }
    }
    fetchPost()
  },[id])

  return (
    <div className='container  my-8'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <Textarea
        value={post.content}
        onChange={(e)=> setPost(e.target.value)}
        className="p-2 border rounded "
        />
        <button onClick={updatePost} className="bg-black text-white px-3 py-2 rounded hover:bg-white hover:text-black m-5">Update</button>
      </div>
    </div>
  )
}

export default EditUserPost
