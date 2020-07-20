import React from 'react';
import './App.css';
import Homev from "./index.js"
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


function App() {
  
  const login = () =>
  {
     
var rusers = fetch("https://5f142b812710570016b37c94.mockapi.io/api/login/loginids")
rusers
	.then(function(data)  {
		return data.json()
	})
  .then(function(Users) {
 

    var a = document.getElementById("emailid").value
    var b = document.getElementById("pwd").value
    
    for(var i=0;i<Users.length;i++)
    {
      console.log(Users.length)
  if(a==Users[i].email && b==Users[i].pwd)
  {
    
      window.location="http://localhost:3000/homeview";
      
    
    break;
  }
  else{
    if(i==Users.length-1)
    {
    
    alert("wrong credentials")
    }
   
  }
  
    }
  })
  }
 

  return (
  
    <div className="App">
      <header className="App-header">
       
      <h1>Login Page</h1>
         </header>
    
    <div>
      <input id ="emailid" placeholder="Enter email id" type="email"></input>
      <input id ="pwd" placeholder="Enter pwd" type="password"></input>
      <button id = "login"   onClick={()=>(login())} >login</button>
    </div>
    
    </div>

  
  );
}

export default App;
