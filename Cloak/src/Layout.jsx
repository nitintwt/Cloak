import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import DiscussionCard from './components/content/DiscussionCard'
import { useAuth0 } from '@auth0/auth0-react'
import AddText from './components/addText/AddText'
import Home from './components/Pages/Home'

function Layout() {
  const {isAuthenticated} =useAuth0()
  return (
    <>
     <Header/>
     <Outlet/> 
    </> 
  )
}

export default Layout
