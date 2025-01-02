import { createSlice } from "@reduxjs/toolkit"
import { searchFavThunk } from "./favThunk"


export const FavoriteSlice = createSlice({
    name: "imgFav",
    initialState:{
        status: "idle",
        data: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(searchFavThunk.pending, (state) => {
            state.status= "pending";
        }).addCase(searchFavThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(searchFavThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload
        })
    }
})

export const getFavData = (state) => state.imgFav.data
export const getFavStatus = (state) => state.imgFav.status
export const getFavError = (state) => state.imgFav.error