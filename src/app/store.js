// store all app states
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';


export const store = configureStore({
    reducer:{//collection of all reducers from each single slicer
        //counter reducer
        counter:counterReducer,
    
        //posts reducer
        posts:postsReducer,
    }
})




