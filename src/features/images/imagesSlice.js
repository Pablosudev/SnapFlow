import { createSlice } from "@reduxjs/toolkit";
import { imagesThunk } from "./imagesThunk";
import { searchImagesThunk } from "./imagesThunk";

export const ImagesSlice = createSlice({
    name: "images",
    initialState:{
        status: "idle",
        data: [],
        error: null
    },
   extraReducers: (builder) => {
        builder.addCase(imagesThunk.pending, (state,action) => {
            state.status="pending"
        }).addCase(imagesThunk.rejected,(state,action)=> {
            state.status= "rejected"
        }).addCase(imagesThunk.fulfilled,(state,action)=> {
            state.status= "fulfilled"
            state.data = action.payload
        }).addCase(searchImagesThunk.pending, (state) => {
            state.status = "pending";
        })
        .addCase(searchImagesThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
        .addCase(searchImagesThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        });
   }
})

export const getImagesData = (state) => state.images.data
export const getImagesStatus = (state) => state.images.status
export const getImagesError = (state) => state.images.error
