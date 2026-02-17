import React from 'react'

const Domintrigration = () => {
  //text change
  function ct() {
    const box = document.getElementById("box");
    box.innerHTML ="welcome to aec";
  }
  //style change
  function cs() {
    const box = document.getElementById("box");
    box.style.backgroundColor ="lightgrey";
    box.style.border ="2px solid red";
    box.style.padding ="10px";

  }
  //TITLE CHANGE BY CLASS
   function tc() {
    const title = document.querySelector(".title");
    title.innerHTML ="MERN STACK ";
  }
  //add new paragraph
  function ap() {
    const para = document.getElementById("para");
    const p = document.createElement("p");
    p.innerHTML = "watch price more than 3000";
    para.appendChild(p);
  }

  return <>
  <h2 className='title'>REACT DOM MANIPULATION</h2>
  <div id='box'>
    welcome to kolkata
  </div>
  <div>
    <button onClick={ct}>TEXT CHANGE</button>
  </div>
  <div>
    <button onClick={cs}>STYLE CHANGE</button>
  </div>
  <div>
    <button onClick={tc}>TITLE CHANGE</button>
  </div>

  <div>
    
    <button onClick={ap}>Element CHANGE</button>
  </div>
  <div id='para'>
  <p>this is good</p>
  <p>laptop price is more than 67000</p>
  </div>
  
  
  
  
  </>
}

export default Domintrigration