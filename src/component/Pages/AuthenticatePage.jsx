import React, { useContext, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/Auth'; // Use the custom hook
import SignUpForm from '../Form/SignUpForm';
import LoginForm from '../Form/LoginForm';
import HomePage from './HomePage';

function AuthenticatePage() {
  const { isAuthenticated } = useAuth(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      <Routes path='/home' element={<HomePage/>}/> 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white">
      <div className="text-center px-4 py-12">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Welcome to VideoTube!
        </h1>
        <p className="text-xl mb-6">
          Discover amazing videos and content on a platform designed for you.
        </p>
        <div className="space-x-4">
          <Link
            to="/sign-up"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/log-in"
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition"
          >
            Log In
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/log-in/*" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default AuthenticatePage;
