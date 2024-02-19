import service from '@/appwrite/config';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';

function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [loading , setLoading] = useState(true)



  useEffect(()=>{
    const fetchPosts= async ()=>{
      try {
        const allPosts = await service.getPosts([])
        if(allPosts){
          const reversedPosts= allPosts.documents.reverse()
          setPosts(reversedPosts);
        }
        setLoading(false)
      } catch (error) {
        console.error("error fetching all posts:", error)
      }
    }

    fetchPosts()
  })

  if (loading) {
    return <div className='font-bold'>Loading...</div>
  }

  return (
    <div className='container mx-auto py-8 '>
      <div className='p-4 lg:w-1/2 md:w-full '>
        {posts.map((post) => (
          <div key={post.$id} className='p-4'>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetPosts;

