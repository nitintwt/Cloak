/*import service from "@/appwrite/config";
import { authLogin } from "@/store/authSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export function UserName() {
  const [userName, setUserName] = useState("");
  const [authId , setAuthId] = useState()
  const {user}=useAuth0()
  const dispatch = useDispatch()

  useEffect(()=>{
    const authId=user.sub;
    setAuthId(authId);
  },[user])

  const submit = async () => {
    try {
      await service.createUserName({
        userName: userName,
        authId:authId
      });
      dispatch(authLogin(userName))
      
      setUserName("")

    } catch (error) {
      console.error("error creating post : ", error);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={userName} onChange={(e) => (setUserName(e.target.value))} />
      </div>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>

  );
}

export default UserName;*/

import service from '@/appwrite/config'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useActionData } from 'react-router-dom'

function UserName() {
  const {user}= useAuth0()

  useEffect( async ()=>{
    
    await service.createUserName({
      userName:"",
      authId: user.sub,
    })
    
  })

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default UserName


