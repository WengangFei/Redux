// store all app states
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
    reducer:{
        //counter reducer
        counter: counterReducer,
        //add more reducers
    }
})

console.log(counterReducer)


