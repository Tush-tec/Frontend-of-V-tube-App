// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../utils/Auth";
// import { useContext } from "react";

// const Dashboard = () => {
//   const { logoutUser, user } = useContext(AuthContext); // Assuming you have user data in context
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Dashboard Header */}
//       <div className="bg-[#033542] text-white p-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
//           <button
//             onClick={handleLogout}
//             className="bg-[#F4A300] text-white px-4 py-2 rounded-lg hover:bg-[#f39c12] transition"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Dashboard Content */}
//       <div className="flex flex-col lg:flex-row p-6 space-y-4 lg:space-y-0 lg:space-x-6">
//         {/* Sidebar */}
//         <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">User Info</h2>
//           <div className="text-gray-700">
//             <p className="mb-2">
//               <strong>Username:</strong> {user?.userName}
//             </p>
//             <p className="mb-2">
//               <strong>Email:</strong> {user?.email}
//             </p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="lg:w-3/4 bg-white p-4 rounded-lg shadow-md space-y-6">
//           <h2 className="text-2xl font-semibold text-[#033542]">Overview</h2>

//           {/* User Activity */}
//           <div className="bg-[#F0F4F7] p-4 rounded-lg">
//             <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
//             <ul className="space-y-2">
//               <li className="flex justify-between">
//                 <span className="text-gray-700">Logged in 2 hours ago</span>
//                 <span className="text-gray-500 text-sm">12:30 PM</span>
//               </li>
//               <li className="flex justify-between">
//                 <span className="text-gray-700">Updated profile picture</span>
//                 <span className="text-gray-500 text-sm">Yesterday</span>
//               </li>
//               <li className="flex justify-between">
//                 <span className="text-gray-700">Created a new post</span>
//                 <span className="text-gray-500 text-sm">2 days ago</span>
//               </li>
//             </ul>
//           </div>

//           {/* Stats Section */}
//           <div className="bg-[#F0F4F7] p-6 rounded-lg">
//             <h3 className="text-lg font-medium mb-4">Your Stats</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h4 className="text-center text-sm font-semibold text-gray-700">Posts</h4>
//                 <p className="text-center text-xl font-bold">12</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h4 className="text-center text-sm font-semibold text-gray-700">Followers</h4>
//                 <p className="text-center text-xl font-bold">350</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h4 className="text-center text-sm font-semibold text-gray-700">Following</h4>
//                 <p className="text-center text-xl font-bold">150</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h4 className="text-center text-sm font-semibold text-gray-700">Comments</h4>
//                 <p className="text-center text-xl font-bold">87</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
