import React, { useState } from 'react'
//making time clock using hooks;
const Time=()=>{
    const time=new Date().toLocaleTimeString();
    const[first,second]=useState(time);
    const t=()=>{
        const time=new Date().toLocaleTimeString();
        second(time);
    }
return(
<>
    <h1>{time}</h1>
    <button onClick={t}>Get Time</button>
</>
);
}
export default Time;