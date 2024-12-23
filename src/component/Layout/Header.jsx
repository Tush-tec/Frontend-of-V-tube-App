import React, { useState } from "react";
import { Link,Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from "../Pages/Contact";
import SignUpForm from "../Form/SignUpForm";
import LoginForm from "../Form/LoginForm";
import GetAllVideoCompo from "./GetAllVideoCompo";
import HomePage from "../Pages/HomePage";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For toggling login/logout state

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
    <header className="bg-[#dedede] text-gray p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Brand Name */}
        <div className="text-xl font-semibold">
          V-Tube
        </div>

        {/* Center: Navigation Links and Search Input */}
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex space-x-8">
            <Link to='/home' className="hover:text-gray-800">
              Home
            </Link>
            <Link to='/about' className="hover:text-gray-800">
              About
            </Link>
            <Link to='/services' className="hover:text-gray-800">
              Services
            </Link>
            <Link to='/contact' className="hover:text-gray-800">
              Contact
            </Link>
            <Link to='/video' className="hover:text-gray-800">
              Videos
            </Link>

          </nav>
          <div className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-md bg-[#2C3E50] text-white focus:outline-none"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Right: Login/Signup or Logout */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/sign-up" className="px-4 py-2 bg-[#B4C8CE] rounded-md hover:bg-blue-500">
                Sign Up
              </Link>
              <Link to="/log-in" className="px-4 py-2 bg-[#B5B9B9] rounded-md hover:bg-blue-500">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
    <main>
        <Routes>
          <Route path="/home/*" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services"element={<Services/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="/sign-up" element={<SignUpForm/>}/>
          <Route path="/log-in" element={<LoginForm/>}/>
          <Route path="/video/*" element={<GetAllVideoCompo/>}/>
        </Routes>
      </main>
    </>
  );
};

export default Header;
