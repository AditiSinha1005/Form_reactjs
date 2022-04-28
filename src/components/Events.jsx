import React, { useState } from 'react'
const Events=()=>{
    const [start,end]=useState('blue');
    const colr=()=>{
        let a='yellow'
      end(a);
    }
    const colrr=()=>{
        let a='pink'
      end(a);
    }
return(
<>
<div style={{backgroundColor:start}}>    // dynamic
<button onClick={colr} onDoubleClick={colrr}>Click Here</button>
</div>
</>
);
}
export default Events;