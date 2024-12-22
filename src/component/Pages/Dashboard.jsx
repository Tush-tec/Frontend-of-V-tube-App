import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/Auth";
import axios from "axios";

const Dashboard = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsResponse, videosResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/v1/dashboard/channel-status", {
            withCredentials: true,
          }),
            axios.get("http://localhost:8080/api/v1/dashboard/channel-videos", {
              withCredentials: true,
            }),
        ]);

        setDashboardData(statsResponse.data.data);
        setChannelVideos(videosResponse.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data.");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <div className="bg-[#033542] text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome, {dashboardData?.fullName}</h1>
          <button
            onClick={handleLogout}
            className="bg-[#F4A300] text-white px-4 py-2 rounded-lg hover:bg-[#f39c12] transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col lg:flex-row p-6 space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Sidebar */}
        <div className="lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Info</h2>
          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Username:</strong> {dashboardData?.userName}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="mb-2">
              <strong>Subscribers:</strong> {dashboardData?.subscriberInfo}
            </p>
            <img
              src={dashboardData?.avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-full mt-4"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 bg-white p-4 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-[#033542]">Channel Overview</h2>

          {/* Channel Stats */}
          <div className="bg-[#F0F4F7] p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Channel Stats</h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Total Subscribers:</strong> {dashboardData?.subscriberInfo}
              </li>
              <li>
                <strong>Total Views:</strong> {dashboardData?.videoInfo?.totalViews || 0}
              </li>
            </ul>
          </div>

          {/* Channel Videos */}
          <div className="bg-[#F0F4F7] p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Channel Videos</h3>
            {channelVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {channelVideos.map((video) => (
                  <div
                    key={video._id}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-700">
                      {video.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {video.description}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      <strong>Views:</strong> {video.views}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Likes:</strong> {video.likes}
                    </p>
                    <p className="text-gray-500 text-xs">
                      <strong>Uploaded:</strong> {new Date(video.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">No videos available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
