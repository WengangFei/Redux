// store all app states
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/counter/postsSlice';


export const store = configureStore({
    reducer:{
        //counter reducer
        counter:counterReducer,
        //add more reducers
        posts:postsReducer,
    }
})




