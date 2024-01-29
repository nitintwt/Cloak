import service from '@/appwrite/config'
import React, { useEffect, useState } from 'react'

function RetrieveComments({postId }) {
  const [getComments , setGetComments] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    
    service.getComments({postId})
    .then((response) => {
      if (response) {
        const reversedComments= response.documents.reverse()
        setGetComments(reversedComments);
      }
      setLoading(false)
    })
  },[postId])

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
