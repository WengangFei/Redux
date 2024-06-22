import { createSlice } from "@reduxjs/toolkit";


//computing each state at its own slicer and send the reducer to 
//store and saved under store's reducer property
const initialState = [
    {id:'1',title:'Learning redux',content:'keep learning'},
    {id:'2',title:'Eating mongo',content:'Keep eating mango'}
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})



export default postSlice.reducer;
export const selectAllPosts = state=>state.posts;