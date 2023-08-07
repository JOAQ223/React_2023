import "./App.css";
import { useState,useEffect } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);
     useEffect(()=> {
     // console.log("componenent mounted");
     
    // [state name ]use effect hook to only with one state to work 
    });
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  );
}

export default App;