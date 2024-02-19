import service from '@/appwrite/config'
import React, { useEffect, useState } from 'react'

function RetrieveComments({postId }) {
  const [getComments , setGetComments] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    const fetchComments = async ()=>{
      try {
        const comments = await service.getComments({postId})
        if (comments){
          const reversedComments= comments.documents.reverse()
          setGetComments(reversedComments);
        }
        setLoading(false)
      } catch (error) {
        console.error("error fetching comments:" , error)
      }
    }
    fetchComments()
  }, [postId])

  if (loading) {
    return <div className='font-bold'>Loading...</div>
  }


  return (
    <>
    {getComments.map((comment) => (
    <div className='bg-white p-4 rounded-lg shadow-md w-full mb-8 border-black'>
    <div className='comment-body'>
    
      <div className='mb-2 ' >
        <span>{comment.comment}</span>
      </div>
      
      
    </div>
  </div>
    ))}
    </>
  )
}

export default RetrieveComments
