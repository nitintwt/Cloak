import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import service from '@/appwrite/config'

function AddText() {
  const [input , setInput] = useState("")

  const handleSubmit = async () => {
    try {
      await service.createPost({
        content: input,
        userId: 'nitin',
      });
      setInput('');
      console.log(service.createPost().documentId)
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
    <div>
    <div className="grid  gap-2">
      <Textarea placeholder="Type your message here." value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleSubmit} >Send message</Button>
    </div>
    </div>
    </> 
  )
}

export default AddText
