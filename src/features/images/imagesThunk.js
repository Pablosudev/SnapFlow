import { createAsyncThunk } from "@reduxjs/toolkit";



export const imagesThunk = createAsyncThunk("images/getImages",async () => {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${import.meta.env.VITE_API_TOKEN}&count=20`)
    const jason = await res.json()
    return json.urls
})
