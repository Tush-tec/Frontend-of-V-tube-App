import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publishVideo } from './VideoSlice';
import { useNavigate } from 'react-router-dom';

const VideoUpload = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.videos);

    const [fillVideoData, setFillVideoData] = useState({
        title: '',
        description: '',
        videoFile: '',
        thumbnailFile: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFillVideoData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFillVideoData((prev) => ({
            ...prev,
            [name]: files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', fillVideoData.title);
        data.append('description', fillVideoData.description);

        if (fillVideoData.videoFile) {
            data.append('videoFile', fillVideoData.videoFile);
        }
        if (fillVideoData.thumbnailFile) {
            data.append('thumbnail', fillVideoData.thumbnailFile);
        }

        // Dispatch the action to upload the video
        dispatch(publishVideo(data));
    };

    // Effect to handle success message and redirect
    if (successMessage) {
        navigate('/video');
    }



    return (
        <div className="max-w-3xl mx-auto p-6 bg-[#F5F7F8] shadow-lg rounded-lg mt-10 mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-center text-black">Upload Your Video</h2>

            {error && <p className="text-red-500 text-center">{error?.message || 'An error occurred'}</p>}
            {loading && <p className="text-blue-500 text-center">Uploading video...</p>}
            {successMessage && !loading && (
                <p className="text-green-500 text-center">{successMessage || 'Video uploaded successfully'}</p>
            )}

            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-6">
                    <label className="block text-black font-medium mb-2">Video Title</label>
                    <input
                        type="text"
                        name="title"
                        value={fillVideoData.title}
                        onChange={handleChange}
                        placeholder="Enter Your Video Title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block text-black font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        value={fillVideoData.description}
                        onChange={handleChange}
                        placeholder="Enter a short description of your video"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>

                {/* Thumbnail */}
                <div className="mb-6">
                    <label className="block text-black font-medium mb-2">Thumbnail Image</label>
                    <input
                        type="file"
                        name="thumbnailFile"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Video File */}
                <div className="mb-6">
                    <label className="block text-black font-medium mb-2">Video File</label>
                    <input
                        type="file"
                        name="videoFile"
                        accept="video/*"
                        onChange={handleFileChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className={`${
                            loading ? 'bg-gray-500' : 'bg-[#43565A] hover:bg-[#7a8e97]'
                        } text-white font-semibold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Upload Video'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VideoUpload;
