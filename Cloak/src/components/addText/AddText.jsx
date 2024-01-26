import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import service from '@/appwrite/config'

function AddText() {
  const [input , setInput] = useState()

  const handleSubmit =() =>{
    service.createPost(input)
    setInput("")

  }
  return (
    <>
    <div>
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." value={input} onChange={(e)=> setInput(e.target.value)} />
      <Button onClick={handleSubmit} >Send message</Button>
    </div>
    </div>
    </>
    
  )
}

export default AddText
