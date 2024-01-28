import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '@/appwrite/config'
import Comment from './comment/Comment'

function Post() {
  const [post , setPost]= useState(null)
  const {navigate}= useNavigate()
  const {id} = useParams()
  
  
 
  useEffect(() => {
    if (id) {
        service.getPost(id).then((post) => {
            if (post) setPost(post);
            else navigate("/");
        });
    } else navigate("/");
}, [ id,navigate]);


  return post ? (
    <>
    <div className=''>
      <div>
        <div>{post.content}</div>
      </div>
      <div>
        <Comment/>
      </div>
    </div>
    
    </>
    
  ) : null;
}

export default Post
