import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../utils/Auth";
import GetAllVideoCompo from "../Layout/GetAllVideoCompo";
import { Routes, Route } from "react-router-dom";

const LoginForm = () => {

  const { loginUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    { 
      userName:"", 
      email: "", 
      password: "" 
    }
  );
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      { 
        ...formData, 
        [name]: value 
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password } = formData;

    if (!userName || !email || !password) {
      setError(" userName, Email and Password are required.");
      return;
    }

    try {
      setError(null); 

      const response = await loginUser(userName, email, password);
      console.log(response);
      

      alert("Login successful!");
      navigate("/video"); 

    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F4F7]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-[#033542] mb-4">Login</h2>
        <p className="text-[#033542] mb-6">Sign in to your account.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="userName"
            name="userName"
            placeholder="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#033542]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#033542]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#033542]"
          />
          <button
            type="submit"
            className="w-full bg-[#033542] text-white p-3 rounded-md hover:bg-[#02232C] transition"
          >
            Login
          </button>
        </form>
      </div>
      <Routes>
        <Route path ="/video" element={<GetAllVideoCompo/>}/>
      </Routes>
    </div>
  );
};

export default LoginForm;
