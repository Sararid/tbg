import React, { useState } from "react"
import YouTube from "react-youtube";

function Gift() {
  const [display, setDisplay] = useState<string | undefined>("visible")
  console.log("🚀 ~ file: Gift.tsx:5 ~ Gift ~ display:", display)
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle shown state
    setDisplay("none")
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const opts = {
    height: "190",
    width: "300",
      
  };

  return (
    <div style={{
      position: "absolute", top: 0, backgroundColor: " rgb(6, 214, 160,1)", zIndex: 99999, width: "300px",
      height: "450px", display: display
    }}>
      
      <button onClick={handleClick} style={{ padding: "20px", width: "20px", top: 0, backgroundColor: " rgb(6, 214, 160,1)", height: "20px", borderColor: "transparent" }}><span role="img" aria-label="dog">⬅</span> </button>
     
      <p>Are you ready to try your first Hammam experience?! <span role="img" aria-label="dog">💆</span> We have a date for the 20th of September, very needed after our long trip, I hope you love it      <span role="img" aria-label="dog">😘</span></p>
      <YouTube videoId="wA2s4tDviNM" opts={opts} />
         
    </div>
  )
}

export default Gift
