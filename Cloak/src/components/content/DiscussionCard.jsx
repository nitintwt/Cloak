import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import AddText from '../addText/AddText'
import GetPost from '../getPosts/GetPosts'
import UserName from '../username/Username'
import PostCard from '../PostCard'
import GetPosts from '../getPosts/GetPosts'

function DiscussionCard() {
  const {user}= useAuth0()
const showContent =()=>{
  return user.email.endsWith("@kiit.ac.in")
}

  return (
    <>
    {showContent() ? (
    <div>
    <h1>kiitian</h1> 
    <AddText/>
    <GetPosts/>
    </div>)
    : 
    (<h1>Not kiitian</h1>)}
    </>
    
  )
}

export default DiscussionCard
