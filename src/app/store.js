import { configureStore } from "@reduxjs/toolkit";
import { imagesmagesSlice } from "../features/images/imagesSlice";


export const store = configureStore({
    reducer: {
        images: imagesSlice.reducer
    }
})