import React, { useState } from 'react'
const Forms=()=>{
    // const[first,last]=useState();
    // const fun1=(event)=>{
    //     last(event)
    // }
    const[first,second]=useState("");

    const[fullname,name]=useState("");

    const[f,s]=useState("");

    const[fl,n]=useState("");

    const[pas,word]=useState("");

    const[finalp,finalw]=useState("");

    const InputEv=(event)=>{
      event.preventDefault();
      second(event.target.value);
    }
    
    const InputEvtwo=(event)=>{
      event.preventDefault();
      s(event.target.value);
    }
    const InputEvthree=(event)=>{
      event.preventDefault();
      word(event.target.value);
    }

    const Sett=(event)=>{
      event.preventDefault();
        name(first);
        n(f);
        finalw(pas);
    }
    // const Settt=(event)=>{
    //   event.preventDefault();
    //     n(f);

    
    return(
    <>
    <div class="container">
    <form onSubmit={Sett}>
      <div class="ad">
      <h1>LOGIN</h1>
      <h1>{fullname}  {fl}</h1>
      <h2> {finalp}</h2>
       <input type='text' placeholder='enter your name' value={first} onChange={InputEv}/> 
       
       <br/>
       <br/>
       <br/>
       <input type='text' placeholder='enter your second name' value={f} onChange={InputEvtwo}/> 
       {/* <div class="sin">
         <p>forgotten password?</p>
       </div> */}
       <br/>
       <br/>
       <br/>
       <input type='text' placeholder='enter your mail id' value={pas} onChange={InputEvthree}/> 
       <div class="but" >
       <p>forgotten password?</p>
       <button type="submit" >SUBMIT</button>
      </div>
      </div>
   
    </form>
    </div>
    </>
    );
}
export default Forms;