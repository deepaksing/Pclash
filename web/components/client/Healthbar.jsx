import React from "react";
import "../../styles/healthbar.css";

const Healthbar = () => {
  return (
    <div className="healthbar">
      <p class="Healthbar-label">
        <span className="health_bar_levels">7/10</span>
      </p>
      <div class="Healthbar-bar" style={{ width: "70%" }}></div>
    </div>
  );
};

export default Healthbar;
