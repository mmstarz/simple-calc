import React, { useState } from "react";
import "./buttons.css";

const NumButton = ({
  name,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  action,
  symbol,
  description
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    action(symbol);
    setTimeout(() => {
      setClicked(false);
    }, 250);
  };

  return (
    <button
      style={{
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd
      }}
      onClick={() => handleClick()}
      type="btn"
      className={clicked ? "calc_button clicked" : "calc_button"}
      dangerouslySetInnerHTML={{ __html: name }}
    ></button>
  );
};

export default NumButton;
