import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Pages/Home.jsx'
import Layout from './Layout.jsx'
import Post from './components/Post.jsx'
import { Auth0Provider} from '@auth0/auth0-react';
import DiscussionCard from './components/content/DiscussionCard.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
        {
          path: '/post/:id',
          element: <Post />,
        },
        {
          path: '/allposts',
          element: <DiscussionCard />,
        },
        {
          path: '/',
          element: <Home />,
        },
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
      clientId="7rXjNAcLVWONMQWbV3mUC43Z0UNPBqTU"
      redirectUri= {window.location.origin }>
      <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>
  </>
)








