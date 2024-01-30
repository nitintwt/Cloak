import React from 'react'
import Header from '../Header/Header'
import UserName from '../username/UserName'
import { User, useAuth0  } from '@auth0/auth0-react'
import Comment from '../comment/Comment'

function Home() {
  const {isAuthemticated}=useAuth0()
  return (
    <div>

        <div className="container mx-auto my-8 p-4 bg-white rounded-md shadow-md">
          <p className="text-lg">
            Tell us what you think about college, life,
            and academics <span className='font-bold'>without revealing your identity.</span> 
            Ask questions, talk with others, and help each other get better.
            If you're from KIIT, let's create a community where we can share our experiences and knowledge.
            Join in, ask, and make our time at KIIT more enjoyable together.
            <span className='font-bold'>Use on your laptop for better experience.</span>
          </p>
        </div>
        <div className="container mx-auto my-8 p-4 bg-white rounded-md shadow-md">
          <p className="text-lg">Soon many features will be added , like groups , search ,polls , Category, and <span className='font-bold'>BLIND DATE</span> </p>
        </div>
        <div className="container mx-auto my-8 p-4 bg-white rounded-md shadow-md">
          <p className="text-lg">Daro mt kisi ka data nahi rahega mere pass.</p>
        </div>
        {isAuthemticated ? (""):(
            <div className="container mx-auto p-8 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Use your KIIT Mail ID to login. Otherwise, you will not be able to see the posts.
            </h1>
          </div>
        )}
    </div>
  );
}

export default Home
