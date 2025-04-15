import React,{useState} from 'react'
import Child from './child';

function Parent(){
    const[count,setCount]=useState(0);
    const inc=()=>setCount(count +1);
    const dec=()=>setCount(count -1);

    return(
        <div classname="counter-box">
        <Child count={count}/>
            <button onClick={inc}>INCREMENT</button>
            <button onClick={dec}>DECREMENT</button>
    
        </div>
      
    );
}
export default Parent;