import { configureStore } from "@reduxjs/toolkit";
import videoReducer from './Features/VideoSlice'

const store = configureStore(
    {
        reducer :{
            videos : videoReducer
        }
    }
)

export default store