import { createAsyncThunk } from "@reduxjs/toolkit";



export const imagesThunk = createAsyncThunk("images/getImages",async () => {
     try{const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=6DkBU_b7WhkeOjB9Zd0AukPhPQBt3XhnabRxnJVNkMc&count=20`)
    const json = await res.json() 
    return [json]}

    catch(error){console.log(error)}
})

