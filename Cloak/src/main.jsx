import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Pages/Home.jsx'
import Layout from './Layout.jsx'
import Post from './components/Post.jsx'
import { Auth0Provider} from '@auth0/auth0-react';
import DiscussionCard from './components/content/DiscussionCard.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import Profile from './components/profile/Profile'

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
        {
          path: '/profile',
          element: <Profile/>,
        },
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
      domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
      clientId="7rXjNAcLVWONMQWbV3mUC43Z0UNPBqTU"
      redirectUri= {window.location.origin }>
      <RouterProvider router={router}/>
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
  </>
)








