import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
  const [name , setName] = useState('');
  const [id ,setId] = useState(1)
//code here 
useEffect(()=>{
  fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`).then((resp)=>resp.json()).then((data)=>{
    console.log(data.name);
    setName(data.name)
  })
} ,[id])
const changeInput=(e)=>{
  setId(e.target.value)
}
 



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={(e)=>changeInput(e)} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
