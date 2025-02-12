import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    status : false,
    error : null,
    videoData :null
}

const videoSlice = createSlice({
    name : "video",
    initialState,
    reducers : {
        setVideo : (state,action)=>{
            state.videoData = action.payload.data;
        }
    }
})

export const {setVideo} = videoSlice.actions
export default videoSlice.reducer