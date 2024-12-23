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
  

  // Create a ref for each video player
  const videoRefs = useRef([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(null);

  // Fetch videos when the component mounts
  useEffect(() => {
    dispatch(fetchAllVideos());
  }, [dispatch]);

  // Initialize video.js for each video element after the component mounts
  useEffect(() => {
    if (videoList.length > 0) {
      videoList.forEach((video, index) => {
        if (videoRefs.current[index] && !videoRefs.current[index].player) {
          const player = videojs(videoRefs.current[index], {
            autoplay: false,
            controls: true,
            preload: "auto",
          });
          videoRefs.current[index].player = player;
        }
      });
    }

    // Clean up players on unmount or when video list changes
    return () => {
      videoList.forEach((video, index) => {
        if (videoRefs.current[index] && videoRefs.current[index].player) {
          videoRefs.current[index].player.dispose();
          videoRefs.current[index].player = null;
        }
      });
    };
  }, [videoList]);

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
            {videoList.map((video, index) => (
              <li
                key={video._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={() => handleVideoClick(video._id)}
              >
                <div className="w-full h-full flex flex-col">
                  {/* Video Card Content */}
                  <div className="w-full h-48 bg-gray-200">
                    <video
                      ref={(el) => (videoRefs.current[video._id] = el)}
                      className="video-js vjs-default-skin w-full h-full object-cover"
                      style={{ height: "100%", width: "100%" }}
                      controls
                      onClick={handleVideoClick}
                    >
                      <source src={video.videoFile} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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
