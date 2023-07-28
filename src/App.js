import './App.css';
import { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

//every c omponenen needs to start with a big letter .
// components need a new syntaxis call with html tag <compmtitle/>
// ig u makr app.module.css then u can render import styles from ""
// styles.name . ..closter{
//trinari if in jscr 
const isGreen = false;
const users =[  {name: "Pedro", age:21 }, 
   {name: "Jake", age:221 },
   {name: "Mike", age:321 }];

function App(){
  const title = "how do u look in the world ";
  return <div classtitle="App">
    {title} 
    {users.map((user,key)=>{
     return <User name= {user.name}  age={user.age}> </User>;
    })}
    <h1 style={{color:isGreen? "green":"red"}}> THIS HAS COLOR</h1>
    {isGreen && <button> change color</button>}
    <div className='closter'>
     <Job salary={5000} position="seniors  Tech CXEO" company="google" ></Job>
     <Job salary={8000} position=" CEO" company="google" ></Job>
     </div>
      <Greet/>
        <Welcome/>
  </div>
}

const User =(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>

    </div>
  );
}
const Job = (props)=>{
  return(
    <div>
      <h3>{props.salary} </h3>
      <h3>{props.position}</h3>
      <h3>{props.company} </h3>
    </div>

  );
}

export default App;
