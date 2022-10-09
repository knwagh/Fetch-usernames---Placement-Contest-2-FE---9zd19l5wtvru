import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
 const [id,setId] = useState(1)
 const [name,setName]= useState('');
 const changeInput = (e) =>{
  setId(e.target.value);
 }
 
 useEffect(()  =>{
  fetch('https://content.newtonschool.co/v1/pr/main/users/${id}')
  .then(res => res.json())
  .then(data => setName(data.name))
  .catch(e => console.log(e.message))
 },[id]); 
//code here 
 



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
