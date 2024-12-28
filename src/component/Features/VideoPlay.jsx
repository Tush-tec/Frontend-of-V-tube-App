import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoById } from "./VideoSlice";
import { useParams } from "react-router-dom";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import default styles for video.js

const VideoPlay = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { singleVideo, loading, error } = useSelector((state) => state.videos);

  // Fetch the video on initial load or videoId change
  useEffect(() => {
    if (videoId) {
      dispatch(fetchVideoById(videoId));
    }
  }, [dispatch, videoId]);

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Ensure the videoRef is available and singleVideo is loaded
    if (singleVideo && videoRef.current && !playerRef.current) {
      console.log("Initializing Video.js Player...");
      // Initialize player only if not already initialized
      playerRef.current = videojs(videoRef.current, {
        autoplay: false,
        controls: true,
        defaultPlaybackRate:1,
        playbackRate:3[0.00, 78.93],
        responsive: true,
        fluid: true,
        controlBar: {
          volumePanel: {
            inline: false,
          },
        },
      });
    }

    // Dispose of the player when the component unmounts or video changes
    return () => {
      // Check if playerRef is initialized and video element still exists in DOM
      if (playerRef.current && videoRef.current && videoRef.current.parentElement) {
        console.log("Disposing Video.js Player...");
        // playerRef.current.dispose(); // Dispose the player
        playerRef.current = null;
      }
    };
  }, [singleVideo]); // This effect depends on singleVideo, so it will re-run when singleVideo changes

  if (loading) return <div className="text-center mt-10 text-gray-600 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500 text-lg">Error: {error}</div>;
  if (!singleVideo) return <div className="text-center mt-10 text-gray-600 text-lg">Video not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{singleVideo.title}</h2>
      <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Video.js player */}
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
          style={{ objectFit: "cover" }}
        >
          <source src={singleVideo.videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-gray-600 mt-4">{singleVideo.description}</p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-semibold">Views:</span>
          <span className="text-gray-600">{singleVideo.views}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-semibold">Owner:</span>
          <span className="text-gray-600">{singleVideo.ownerDetails?.userName || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
