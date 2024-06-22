import { createSlice } from "@reduxjs/toolkit";



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