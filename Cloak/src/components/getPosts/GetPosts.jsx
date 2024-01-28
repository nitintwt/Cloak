import service from '@/appwrite/config';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';

function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    service.getPosts([])
    .then((response) => {
      if (response) {
        setPosts(response.documents);
      }
      setLoading(false)
    })
  },[])

  if (loading) {
    return <div className='font-bold'>Loading...</div>
  }

  return (
    <div className='container mx-auto py-8'>
      <div className='flex flex-wrap -mx-2'>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 mr-8 md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetPosts;

