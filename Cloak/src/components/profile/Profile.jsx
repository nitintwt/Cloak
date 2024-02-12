import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import service from '@/appwrite/config'

function Profile() {
  const {user}= useAuth0()
  const [userPosts , setUserPosts]= useState([])

  useEffect( ()=>{
    service.getUserPosts({
      userId:user.sub,
    })
    .then((response)=>{
      if(response){
        const reversedUserPosts= response.documents.reverse()
        setUserPosts(reversedUserPosts);
      }
    })
  })

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
      </div>
      <div>
        <section>
          <h1>Your Posts</h1>
        </section>
        {userPosts.map((post)=>{
          <div key={post.$id} className='p-2 mr-8 md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <PostCard {...post} />
          </div>
        })
        }
      </div>
    </div>
    
  )
}

export default Profile
