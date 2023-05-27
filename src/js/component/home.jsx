import React, { useState } from "react";
import "./home.style.css";

const Home = () => {
  const [lightColor, setLightColor] = useState("");

  return (
    <div className="grandfather">
      <div className="father bg-black rounded">
        <div
          className={`traffic bg-danger rounded-circle ${
            lightColor === "red" ? "shine" : ""
          }`}
          onclick={() => setLightColor("red")}
        ></div>
        <div
          className={`traffic bg-warning rounded-circle ${
            lightColor === "yellow" ? "shine" : ""
          }`}
          onclick={() => setLightColor("yellow")}
        ></div>
        <div
          className={`traffic bg-success rounded-circle ${
            lightColor === "green" ? "shine" : ""
          }`}
          onclick={() => setLightColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
