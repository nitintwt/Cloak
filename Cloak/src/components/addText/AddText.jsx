import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import service from '@/appwrite/config';

function AddText() {
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    try {
      await service.createPost({
        content: input,
        userId: 'nitin',
      });
      setInput('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <Textarea
          placeholder="Type your message here."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border rounded "
        />
        <Button
          onClick={handleSubmit}
          className="bg-black text-white px-3 py-2 rounded hover:bg-white hover:text-black"
        >
          Send
        </Button>
      </div>
    </>
  );
}

export default AddText;



