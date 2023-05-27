import React, { useState } from "react";
import "./home.style.css";

const Home = () => {
  const [light, setLight] = useState("");

  return (
    <div className="grandfather">
      <div className="father bg-black rounded">
        <div
          className={`traffic bg-danger rounded-circle ${
            light === "red" ? "shine" : ""
          }`}
          onClick={() => setLight("red")}
        ></div>
        <div
          className={`traffic bg-danger rounded-circle ${
            light === "yellow" ? "shine" : ""
          }`}
          onClick={() => setLight("yellow")}
        ></div>
        <div
          className={`traffic bg-danger rounded-circle ${
            light === "green" ? "shine" : ""
          }`}
          onClick={() => setLight("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
