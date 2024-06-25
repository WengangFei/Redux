import { createSlice } from '@reduxjs/toolkit'




const initialState = [
    {
        id:1,
        title:'pc',
        content:'nice day'
    },
    {
        id:2,
        title:'doa',
        content:'flying'
    },
]
//create a slice postsSlice
const postsSlice = createSlice({
    name:'posts',//name use for the slice,use it for generate action type.
    initialState,//initial values that slice manages it
    // Each reducer function modify the state directly since Redux Toolkit 
    //uses the Immer library under the hood to handle immutable updates.
    reducers:{
        //reducer function determine how the state should change when action are dispatched.
        //action name addData,
        addData(state,action){//action creator
            //The payload in reducer function refers to the data that is carried by an action
             state.push(action.payload);
            // console.log(action)
            // {
            //     payload: {
                // id: 'hN7vdXPepd71FQR-x_IhE', title: 'qw',
                // content: 'wq'},
            //     type: "posts/addData"
            // }
        }
    }
})




export default postsSlice.reducer;
export const { addData } = postsSlice.actions;