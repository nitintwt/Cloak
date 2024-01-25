import React from 'react'
import {Link} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"

export default function Header() {
  const {loginWithRedirect,user , isAuthenticated,logout } = useAuth0();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center">
           <div className="text-2xl font-bold text-gray-800">
             Cloak
            </div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button onClick={(e) => logout ()}>Logout</button>
             </div>
            ) : (
          <div className="flex items-center space-x-4">
            <button onClick={(e) => loginWithRedirect ()}>Login</button>
          </div>
            )}
        </div>
      </nav>
    </header>
  );
}