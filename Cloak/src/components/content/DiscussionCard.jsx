import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import AddText from '../addText/AddText'
import GetPosts from '../getPosts/GetPosts'
import UserName from '../username/UserName'
import { useSelector } from 'react-redux'

function DiscussionCard() {
  const {user}= useAuth0()
/*const showContent =()=>{
  return user.email.endsWith("@kiit.ac.in")
}*/

const userName2 = useSelector((state)=>{
  
  return state.auth.userName
})
console.log(userName2)
return (
  <div className="container mx-auto my-8">
      
        <div>
          <h1 className="text-3xl font-bold mb-4">Oh,My Lovable Kiitians!</h1>
          <AddText />
          <GetPosts />
          
          <h1>{userName2}</h1>

        </div>
    </div>
);
}


export default DiscussionCard
