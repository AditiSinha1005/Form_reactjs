import React, { useState } from 'react'
const DigitalT=()=>{
    const time=new Date().toLocaleTimeString();
    const[first,second]=useState(time);
    const t=()=>{
        const time=new Date().toLocaleTimeString();
        second(time);
    }
   
        setInterval(t,1000);
    
return(
<>
    <h1>{first}</h1>
    
</>
);
}
export default DigitalT;