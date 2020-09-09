import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [content, setContent] = useState([]);
  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  const createBoxes = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = (
          <div
            style={{
              backgroundPosition: `${-j * 125}px ${-i * 125}px`
            }}
            className="box"
            key={Date.now() + Math.random() * 100}
          ></div>
        );

        setContent((state) => [...state, box]);
      }
    }
  };

  useEffect(() => {
    createBoxes();
  }, []);

  return (
    <div className="app">
      <button className="magic" onClick={clickHandler}>
        Magic{" "}
        <span role="img" aria-label="">
          🎩
        </span>
      </button>
      <div className={toggle === true ? "boxes big" : "boxes"}>{content}</div>
    </div>
  );
}
