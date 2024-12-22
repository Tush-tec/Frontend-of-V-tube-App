import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/Auth";

const SignUpForm = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "avatar") {
      setAvatar(e.target.files[0]);
    } else if (e.target.name === "coverImage") {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, fullName, email, password } = formData;
    if ([userName, fullName, email, password].some((field) => field.trim() === "")) {
      setError("All fields are required.");
      return;
    }
    if (!avatar) {
      setError("Avatar file is required.");
      return;
    }

    try {
      setError(null);
      await registerUser(userName, fullName, email, password, avatar, coverImage);
      navigate('/log-in')
      alert("User registered successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6ECEE]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold text-[#02232C] mb-4">Sign Up</h2>
        <p className="text-[#02232C] mb-6">Create your account to get started.</p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#02232C]"
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#02232C]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#02232C]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#02232C]"
          />
          <div>
            <label className="block text-sm text-[#02232C] mb-1">Avatar</label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-[#02232C] mb-1">Cover Image</label>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#02232C] text-white p-3 rounded-md hover:bg-[#033542] transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
