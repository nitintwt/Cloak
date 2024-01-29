import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import AddText from '../addText/AddText'
import GetPosts from '../getPosts/GetPosts'

function DiscussionCard() {
  const {user}= useAuth0()
const showContent =()=>{
  return user.email.endsWith("@kiit.ac.in")
}

return (
  <div className="container mx-auto my-8">
    <div className="sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      {showContent() ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Oh,My Lovable Kiitians!</h1>
          <AddText />
          <GetPosts />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Sorry, You are not a Kiitian.</h1>
        </div>
      )}
    </div>
  </div>
);
}


export default DiscussionCard
