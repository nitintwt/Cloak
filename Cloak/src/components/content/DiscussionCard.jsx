import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import AddText from '../addText/AddText'
import GetPost from '../getPosts/GetPost'

function DiscussionCard() {
  const {user}= useAuth0()
const showContent =()=>{
  return user.email.endsWith("@kiit.ac.in")
}

  return (
    <>
    {showContent() ? (<h1>kiitian</h1> , <AddText/>): (<h1>Not kiitian</h1>)}
    
    
    </>
    
  )
}

export default DiscussionCard
