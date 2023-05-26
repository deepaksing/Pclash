import React from "react";
import "../../styles/healthbar.css";

const Healthbar = () => {
  return (
    <div className="healthbar">
      <p class="Healthbar-label">
        <span>10/10</span>
      </p>
      <div class="Healthbar-bar" style={{ width: "100%" }}></div>
    </div>
  );
};

export default Healthbar;
