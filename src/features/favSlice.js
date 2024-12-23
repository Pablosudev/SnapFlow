import { searchFavThunk } from "./images/favThunk";
import { createSlice } from "@reduxjs/toolkit";






export const FavSlice = createSlice({
    name: "imagesFav",
    initialState:{
        status: "idle",
        data: [],
        error: null
    },
    extraReducers: (builders) => {
        builders.addCase ( searchFavThunk.pending, (state,action) => {
            state.status = "pending";
        }).addCase ( searchFavThunk.rejected, (state,action) => {
            state.status = "rejected";
            state.error  = action.error.message;
        }).addCase (searchFavThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        })
    }

});


export const getImagesFavData = (state) => state.imagesFav?.data || [];
export const getImagesFavStatus = (state) => state.imagesFav?.status;
export const getImagesFavError = (state) => state.imagesFav.error;
export default FavSlice.reducer;

