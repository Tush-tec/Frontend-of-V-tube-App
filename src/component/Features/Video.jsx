import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllVideos } from "./VideoSlice";
import { useSpring, animated } from "@react-spring/web";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { videoList, loading, error } = useSelector((state) => state.videos);

  const fadeInStyles = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 800 },
    });
  
    const slideUpStyles = useSpring({
      from: { transform: "translateY(50%)", opacity: 0 },
      to: { transform: "translateY(0%)", opacity: 1 },
      config: { duration: 1000 },
    });

  // Fetch videos when the component mounts
  useEffect(() => {
    dispatch(fetchAllVideos());
  }, [dispatch]);

  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const isVideoListAvailable = Array.isArray(videoList) && videoList.length > 0;

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const handleUploadButtonClick = () => {
    navigate("/upload-video");
  };

  return (
    <div className="container mx-auto p-6 flex flex-col min-h-screen">

      <div
        className="flex justify-between items-center mb-6 p-4"
        style={{ backgroundColor: "#6b7071" }}
      >
        <h1 className="text-2xl font-bold text-white">Video List</h1>

        <div className="mt-12 flex justify-center">
        <animated.div
          style={fadeInStyles}
          className="w-16 h-16 rounded-full shadow-lg bg-[#2e2f2f] flex items-center justify-center animate-bounce"
          
        >
          <p className="text-white font-bold">V-Tube</p>
        </animated.div>
      </div>

        <button
          onClick={handleUploadButtonClick}
          className="px-4 py-2 bg-[#F5F7F8] text-Black rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Upload Video
        </button>
      </div>

      <div className="flex-grow">
        {!isVideoListAvailable ? (
          <p>No videos available</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videoList.map((video) => (
             <li
                key={video._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={() => handleVideoClick(video._id)}
              >
                <div className="w-full h-full flex flex-col">
                  {/* Video Card Content, Where thumbnail are  */}
                  <div className="w-full h-48 bg-gray-200 relative group">
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover group-hover:opacity-50"
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    Play
                  </button>
                </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold truncate">{video.title}</h2>
                    <p className="text-sm text-gray-600 truncate">{video.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoList;
