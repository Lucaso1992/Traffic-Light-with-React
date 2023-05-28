import React, { useState } from "react";
import "./light.css";

const Light = () => {
  const [lightColor, setLightColor] = useState("");

  return (
    <div className="grandfather">
      <div className="father bg-black rounded">
        <div
          className={`traffic bg-danger rounded-circle ${
            lightColor === "red" ? "shine" : ""
          }`}
          onClick={() => setLightColor("red")}
        ></div>
        <div
          className={`traffic bg-warning rounded-circle ${
            lightColor === "yellow" ? "shine" : ""
          }`}
          onClick={() => setLightColor("yellow")}
        ></div>
        <div
          className={`traffic bg-success rounded-circle ${
            lightColor === "green" ? "shine" : ""
          }`}
          onClick={() => setLightColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default Light;
