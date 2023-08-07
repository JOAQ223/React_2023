import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, 
  //what proops do u want to  use in the array  , only the mounting triggers
  []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1> {text}</h1>
    </div>
  );
};