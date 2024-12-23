import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoById } from "./VideoSlice";
import { useParams } from "react-router-dom";

const VideoPlay = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { singleVideo, loading, error } = useSelector((state) => state.videos);

  useEffect(() => {
    if (videoId) {
      dispatch(fetchVideoById(videoId));
    }
  }, [dispatch, videoId]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!singleVideo) return <div>Video not found</div>;

  console.log("Single Video:", singleVideo);


  return (
    <div>
      <h2>{singleVideo.title}</h2>
      <video controls className="video-player" style={{ width: "100%", maxHeight: "500px" }}>
        <source src={singleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{singleVideo.description}</p>
      <p>
        <strong>Views:</strong> {singleVideo.views}
      </p>
      <p>
        <strong>Owner:</strong> {singleVideo.ownerDetails?.userName || "Unknown"}
      </p>
    </div>
  );
};

export default VideoPlay;
