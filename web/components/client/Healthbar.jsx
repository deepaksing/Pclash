import React, { useEffect, useState } from "react";
import "../../styles/healthbar.css";

const Healthbar = ({ state }) => {
  const [health, setHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);

  useEffect(() => {
    if (state && state.turn % 2) {
      setMaxHealth(state.player.maxHealth);
      setHealth(state.player.currentHealth);
    }
  }, [state]);
  return (
    <div className="healthbar">
      <p class="Healthbar-label">
        <span className="health_bar_levels">
          {health}/{maxHealth}
        </span>
      </p>
      <div
        class="Healthbar-bar"
        style={{ width: `${(health * 100) / maxHealth}%` }}
      ></div>
    </div>
  );
};

export default Healthbar;
