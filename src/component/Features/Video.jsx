import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVideos } from "./VideoSlice"; // Adjust the path as necessary
import { Link, Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import VideoUpload from "./VideoUpload";

const VideoList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigation
  const { videoList, loading, error } = useSelector((state) => state.videos); // Access videos from state

  // Fetch videos when the component mounts
  useEffect(() => {
    dispatch(fetchAllVideos());
  }, [dispatch]);

  // Render loading or error message if applicable
  if (loading)
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Ensure videoList is defined before mapping
  const isVideoListAvailable = Array.isArray(videoList) && videoList.length > 0;

  // Function to handle redirect to upload-video form
  const handleUploadClick = () => {
    navigate("/upload-video"); // Navigate to the upload-video page
  };

  return (
    <>
      <div className="container mx-auto p-6 flex flex-col min-h-screen">
        {/* Video List */}
        <div className="flex-grow">
          {!isVideoListAvailable ? (
            <p className="text-center text-lg">No videos available</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videoList.map((video) => (
                <li
                  key={video._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <h3 className="text-white font-semibold text-lg">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Upload Button at the bottom, centered */}
        <div className="flex justify-center items-center mt-auto mb-6">
          <button
            onClick={handleUploadClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Upload Video
          </button>
        </div>
      </div>

      {/* Define your routes here, in a higher-level component */}
      <Routes>
        <Route path="/upload-video" element={<VideoUpload />} />
      </Routes>
    </>
  );
};

export default VideoList;
