import React from 'react'

const Para = () => {

let date= new Date();
date=date.getHours();
let greet=" ";
const design= {};
if(date>0 && date<12)
{
greet="GOOD MORNING";
design.color="brown";
}
else if(date>12 && date <=17)
{
  greet="GOOD AFTERNOON";
  design.color="orange";
  // design.bgcolor="pink";
}
else
{
greet="GOOD NIGHT";
design.color="blue";

}
return(
    <>
<div>
    <h1 >
      Hello!!, <span style={design}> {greet} </span> 
    </h1>
    </div>
    </>
);
}

export default Para
