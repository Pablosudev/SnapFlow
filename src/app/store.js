import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/images/imagesSlice";
import { FavoriteSlice } from "../features/images/favoriteSlice";


export const store = configureStore({
    reducer: {
        images: ImagesSlice.reducer,
        imgFav : FavoriteSlice.reducer,
    }
})
export default store;