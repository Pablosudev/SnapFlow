import { createSlice } from "@reduxjs/toolkit";
import { imagesThunk } from "./imagesThunk";

export const ImagesSlice = createSlice({
    name: "images",
    initialState:{
        status: "idle",
        data: [],
        error: null
    },
   extraReducers: (builder) => {
        builder.addCase(imagesThunk.fulfilled((state,action) =>{
            state.status = "fulfilled"
            state.data = action.payload
        })).addCase(imagesThunk.pending, (state,action) => {
            state.status="pending"
        }).addCase(imagesThunk.rejected,(state,action)=> {
            state.status= "rejected"
        })
   }
})

export const getImagesData = (state) => state.images.data
export const getImagesStatus = (state) => state.images.status
