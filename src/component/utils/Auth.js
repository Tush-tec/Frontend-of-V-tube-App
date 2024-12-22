import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// build Auth Object using create context method.
// Pass all function which have depend on your component. like i'll build login function here so i created all function which can use in register,login,logout component.
// Then build Coustom Hooks which work as passing data in your component.
// This Custom Hook have access of your create context object  through useContext Hook. pass your context object in useContext Hook.

const API_BASE_URL = "http://localhost:8080/api/v1/users";

// Creating the Auth Context
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  registerUser: async () => {},
  loginUser: async () => {},
  logoutUser: async () => {},
});

// AuthProvider component that will wrap your app
 const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } else {
        try {
          // const response = await axios.get(`${API_BASE_URL}/check-auth`);
          if (response.data.isAuthenticated) {
            setUser(response.data.user);
            setIsAuthenticated(true);
          }
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };

    checkAuth();
  }, []);

  const registerUser = async (userName, fullName, email, password, avatar, coverImage) => {
    try {
      // Create FormData to handle file uploads
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      if (avatar) formData.append("avatar", avatar);
      if (coverImage) formData.append("coverImage", coverImage);
  
      // Send POST request
      const response = await axios.post(`${API_BASE_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Update state on successful registration
      setUser(response.data.data); // Assuming 'data' contains the user details
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      // Handle errors and propagate the message
      throw new Error(error.response?.data?.message || "Failed to register user");
    }
  };

  const loginUser = async (userName, email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {userName, email, password }, { withCredentials: true });
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to login user");
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setIsAuthenticated, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in components
 const useAuth = () => useContext(AuthContext);

export{
  AuthContext,
  AuthProvider,
  useAuth

}