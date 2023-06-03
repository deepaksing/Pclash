import React, { useEffect, useState } from "react";
import "../../styles/healthbar.css";

const Healthbar = ({ state, enemyHealth, type }) => {
  const [health, setHealth] = useState(100);
  const [maxHealth, setMaxHealth] = useState(100);

  useEffect(() => {
    if (state && state.turn % 2) {
      setMaxHealth(state.player.maxHealth);
      setHealth(state.player.currentHealth);
    }
  }, [state]);

  useEffect(() => {
    if (enemyHealth) {
      setHealth(enemyHealth);
    }
  }, [enemyHealth]);
  return (
    <div className="healthbar">
      <p className="Healthbar-label">
        <span className="health_bar_levels">
          {health}/{maxHealth}
        </span>
      </p>
      <div
        className="Healthbar-bar"
        style={{ width: `${(health * 100) / maxHealth}%` }}
      ></div>
    </div>
  );
};

export default Healthbar;
