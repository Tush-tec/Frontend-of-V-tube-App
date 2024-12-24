import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/video";

// Async-thunk: Use middleware like redux-thunk (built-in with Redux Toolkit) for handling asynchronous actions.

const fetchAllVideos = createAsyncThunk(
    'video/fetchAll',
     async (_, thunkAPI) => {
    try {

        const response = await axios.get(`${baseURL}/video`, { withCredentials: true });
        console.log('Full API Response:', response);
        console.log(response.data.data.videos);

        return response.data.data.videos; 
    } catch (error) {
        console.error('API Error:', error.response?.data || error.message);
        return thunkAPI.rejectWithValue(error.response?.data || { message: 'Unknown error' });
    }
});

const fetchVideoById = createAsyncThunk(
    "videos/fetchById",
    async (videoId, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/${videoId}`, { withCredentials: true });
            console.log("check id for video",response.data.data.videoFile);
            console.log("check Views and  getting owner", response.data)
            return response.data.data;
           
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Unknown error occurred";
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);


const publishVideo = createAsyncThunk(
    '/video/publish',
     async (videoData, thunkAPI) => {
    try {
        const response = await axios.post(`${baseURL}/upload-video`, videoData, { withCredentials: true });
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const updateVideo = createAsyncThunk(
    'video/update', 
    async({ videoId, videoData }, thunkAPI) => {1
    try {

        const response = await axios.put(`${baseURL}/video/${videoId}`,
            videoData,
            { withCredentials: true });

        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const deleteVideo = createAsyncThunk(
    'video/delete', 
    async (videoId, thunkAPI) => {
    try {
        const response = await axios.delete(`${baseURL}/video/${videoId}`, { withCredentials: true });

        return response.data;
    } catch (error) {

        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

export { fetchAllVideos, fetchVideoById, publishVideo, updateVideo, deleteVideo };

const createVideoSlice = createSlice({
    name: "videos",
    initialState: {
        videoList: [],
        singleVideo: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllVideos.fulfilled, (state, action) => {
                state.videoList = action.payload; // Directly assign videos here
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchAllVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Error occurred';
            })
            .addCase(fetchVideoById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideoById.fulfilled, (state, action) => {
                state.loading = false;
                state.singleVideo = action.payload;
                state.error = null; 
            })
            .addCase(fetchVideoById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Error occurred';
            })
            .addCase(publishVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(publishVideo.fulfilled, (state, action) => {
                state.videoList.push(action.payload);
                state.loading = false;
            })
            .addCase(publishVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateVideo.fulfilled, (state, action) => {
                const index = state.videoList.findIndex(video => video._id === action.payload._id);
                if (index !== -1) {
                    state.videoList[index] = action.payload;
                }
            })
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.videoList = state.videoList.filter(video => video._id !== action.payload._id);
            });
    }
});

export default createVideoSlice.reducer;
