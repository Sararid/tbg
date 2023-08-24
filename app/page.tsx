
"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Home2 from "./pages/Home2";
import Pass from "./pages/Pass";
import "./App.css";

function Home() {
  const password = process.env.REACT_APP_ENVPASSWORD

  const [inputValue, setInputValue] = useState("")
  const handleInput = (ev: any) => {
    setInputValue(ev.target.value)

  }
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ password:", inputValue)
  return (
    <div className="App" >

      {inputValue ? <Home2 /> : <Pass onChange={handleInput} value={inputValue} />}
    </div >
  );
}

export default Home;
