import React, { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import service from '@/appwrite/config';
import { useAuth0 } from '@auth0/auth0-react';
import { useCloak } from '@/context/Context';

function AddText() {
  const [input, setInput] = useState('');
  const {user}= useAuth0()
  //const [loggedInUsersCount, setLoggedInUsersCount] = useState(0);
  //const {userName }= useCloak()

  /*useEffect(()=>{
    setLoggedInUsersCount(prevCount => prevCount + 1);
    const username = `kiitian${loggedInUsersCount + 1}`;

    userName(username)

  })*/



  const handleSubmit = async () => {
    if (input.trim()==='') return alert("Message toh likh le bhai pehle");  //checks if the input is empty or not 
    try {
      await service.createPost({
        content: input,
        userId: user?.name,
        authId: user?.sub,
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



