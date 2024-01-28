import React, { Children } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function AuthLayout() {
  const {user}= useAuth0()
  const showContent =()=>{
    return user.email.endsWith("@kiit.ac.in")
  }
  return showContent ? <>{Children}</> : <h1>YOU ARE NOT A LOVABLE KIITIAN</h1>
}

export default AuthLayout