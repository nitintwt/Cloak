import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function Header() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <header className="bg-black text-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="" className="text-white">
              KIITIANS
            </Link>
          </div>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={(e) => logout()}
                className="bg-black text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-black"
              >
                Logout
              </button>
              <Link
                to="/allposts"
                className="bg-black text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-black"
              >
                All Posts
              </Link>
              <Link
                to="/profile"
                className="bg-black text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-black"
              >
                Profile
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={(e) => loginWithRedirect()}
                className="bg-white text-black px-4 py-2 rounded transition duration-300 hover:bg-black hover:text-white"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
