import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchFavThunk = createAsyncThunk("images/searchFav", async (query) => {
try{
const res  = await fetch (`https://api.unsplash.com/search/photos?query=${query}&client_id=6DkBU_b7WhkeOjB9Zd0AukPhPQBt3XhnabRxnJVNkMc&per_page=20`);
const json = await res.json();
return json.results;


}catch (error) {
    console.log(error)
}
})