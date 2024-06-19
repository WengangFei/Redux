import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from 'react';



const Counter = () => {

    //useSlector is allow the component to access the state in store
    const count = useSelector(state=>state.counter.count)
    const dispatch = useDispatch();
    // state = {counter:{count:0}}

    const [num,setNum] = useState(0);
 


  return (

    
    <div>
        Counter:{count}
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>{
                dispatch(reset());
                setNum(0);
            }}>Reset</button>
            <div>
                <input type='text' value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
                <button onClick={()=>{
                    dispatch(incrementByAmount(num));
                    

                }}>Add</button>
            </div>
        </div>

    </div>
  )
}

export default Counter