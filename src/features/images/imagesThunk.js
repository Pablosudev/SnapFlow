import { createAsyncThunk } from "@reduxjs/toolkit";



export const imagesThunk = createAsyncThunk("images/getImages",async () => {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=6DkBU_b7WhkeOjB9Zd0AukPhPQBt3XhnabRxnJVNkMc`)
    const json = await res.json()
    return json.data
})
