import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for API
const baseURL = "http://localhost:8080/api/v1/video";

// Async-thunk: Use middleware like redux-thunk (built-in with Redux Toolkit) for handling asynchronous actions.
const fetchAllVideos = createAsyncThunk('video/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/video`,{ withCredentials: true } );
        console.log('API Response:', response.data.videos);
        return response.data.videos; 
    } catch (error) {
        console.error('API Error:', error.response?.data || error.message); 
        return thunkAPI.rejectWithValue(error.response?.data || { message: 'Unknown error' });
    }
});

const fetchVideoById = createAsyncThunk('video/fetchByVideoId', async (videoId, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/video/${videoId}`, { withCredentials: true });
        return response.data.data; // Assuming data is in `data` key
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const publishVideo = createAsyncThunk('/video/publish', async (videoData, thunkAPI) => {
    try {
        const response = await axios.post(`${baseURL}/upload-video`, videoData, { withCredentials: true });
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const updateVideo = createAsyncThunk('video/update', async({ videoId, videoData }, thunkAPI) => {
    try {
        const response = await axios.put(`${baseURL}/video/${videoId}`, videoData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});

const deleteVideo = createAsyncThunk('video/delete', async (videoId, thunkAPI) => {
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
            .addCase(fetchVideoById.fulfilled, (state, action) => {
                state.singleVideo = action.payload;
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
