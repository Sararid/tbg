
"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Home2 from "./pages/Home2";
import Pass from "./pages/Pass";
import "./App.css";

function Home() {
  const password = process.env.APP_ENVPASSWORD

  const [inputValue, setInputValue] = useState("")
  const handleInput = (ev: any) => {
    setInputValue(ev.target.value)

  }
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ password:", inputValue)
  return (
    <div className="App" >
      {/* <Pass onChange={handleInput} value={inputValue} /> */}
      <Home2 />
    {/* {inputValue === process.env.HONEY ? <Home2 /> : <Pass onChange={handleInput} value={inputValue} />}  */}
    </div >
  );
}

export default Home;
