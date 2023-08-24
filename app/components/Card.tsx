import React, { useState } from "react"
import "./Card.scss"
import Gift from "./Gift"
function Card() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY GERRY!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY Gerry! <span role="img" aria-label="dog">🎂</span></h3>
        <p>Dear Honeybooboo     <span role="img" aria-label="dog">💗</span></p>
        <p>
          Happy birthday my love!! Even though you are working today, I hope you will enjoy it to the fullest,
          and I will make sure you have an amazing suprise dinner tonight!
          May all of your birthday wishes come true.💗
        </p>
        <p className="name">your Honey Bear Sara</p>
        <button onClick={handleClick} className="gift">Open your gift <span role="img" aria-label="dog" style={{ width: "100px" }}>🎁</span>  </button>
        {/* 👇️ show component on click */}
        {isShown && <Gift />}

      </div>

    </div>
  )
}

export default Card
