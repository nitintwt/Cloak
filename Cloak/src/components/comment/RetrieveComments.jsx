import service from '@/appwrite/config'
import React, { useEffect, useState } from 'react'

function RetrieveComments({postId }) {
  const [getComments , setGetComments] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    service.getComments([ postId ])
    .then((response) => {
      if (response) {
        const reversedComments= response.documents.reverse()
        setGetComments(reversedComments);
      }
      setLoading(false)
    })
  })

  if (loading) {
    return <div className='font-bold'>Loading...</div>
  }


  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-full'>
    <div className='comment-body'>
    {getComments.map((comment) => (
      <div key={comment.$id} >
        <span>{comment.comment}</span>
      </div>
      ))}
      
    </div>
  </div>
    
  )
}

export default RetrieveComments
