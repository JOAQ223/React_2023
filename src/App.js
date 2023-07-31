//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [age, setAge]= useState(0);
  const [inputValue, setInputValue]= useState("");
 const [showText,SetShowText]=useState(true);
  const [textColor, SetTextColor]= useState("black");
  const increaseAge= () =>{
    setAge(age+1);
  };

  const handleInputChange =(Event) =>{
    setInputValue(Event.target.value);
  };
  return (
    <div className="App">
      {age}
      <button  className='btn' onClick={() =>{
        SetTextColor(textColor=== "black" ? "red" : "black");
        //SetShowText(!showText);
      }}
      >Increas age </button>
      ,<input type="text" onChange={handleInputChange} />
      {inputValue}
      {showText &&  <h1>SHOW OR  HIDE </h1>}
      <h1 style={{color:textColor}} > change color </h1>
    </div>
  );
}

export default App;
