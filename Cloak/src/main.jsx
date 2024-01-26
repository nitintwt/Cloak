import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'
import './index.css'
import Home from './components/Pages/Home.jsx'
import Layout from './Layout.jsx'

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import App from "./App.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
      <Layout/>
  </Auth0Provider>
  </React.StrictMode>
  </>

)








