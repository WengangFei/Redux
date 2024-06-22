import { createSlice } from "@reduxjs/toolkit";



//slice is to slice redux state object to multiple slices of state
//slice is a collection of reducer logic and actions for a single feature in app 



export const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{//all actions
        increment:state=>{
            state.count += 1;
    
        },
        decrement:state=>{
            state.count -= 1;
        },

        reset:state=>{
            state.count = 0;
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload;
        }
    }
})

// console.log(counterSlice)
// actions: {increment: ƒ, decrement: ƒ}
// caseReducers: {increment: ƒ, decrement: ƒ}
// getInitialState: ƒ getInitialState()
// name: "counter"
// reducer: ƒ reducer(state, action)
// reducerPath: "counter"
// selectSlice: ƒ selectSlice(state)
// selectors: {}
export const{ increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;



