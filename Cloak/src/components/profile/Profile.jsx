import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import service from '@/appwrite/config'
import PostCard from '../PostCard'

function Profile() {
  const {user}= useAuth0()
  const [userPosts , setUserPosts]= useState([])
  const picture  = user.picture;

  useEffect( ()=>{
    service.getUserPosts({
      authId:user.sub,
    })
    .then((response)=>{
      if(response){
        const reversedUserPosts= response.documents.reverse()
        setUserPosts(reversedUserPosts);
      }
    })
  },[])

  console.log(userPosts)

    return (
      <div className="bg-gray-100 min-h-screen flex">
       <div className="flex-1 p-8">
          <div className="mb-6 flex items-center">
            {picture && (
              <img
                src={picture}
                alt="Profile"
                className="rounded-full h-16 w-16 object-cover mr-4"
              />
            )}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">Welcome to your profile!</p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Your Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post) => (
                <div key={post.$id} className="bg-white p-4 rounded-lg shadow-md">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

export default Profile
