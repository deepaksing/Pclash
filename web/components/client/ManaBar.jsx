import React, { useEffect, useState } from "react";

const ManaBar = ({ state }) => {
  const [mana, setMana] = useState(0);
  useEffect(() => {
    if (state && state.turn % 2) {
      console.log(state);
      setMana(state.player.currentMana + 1);
    }
  }, [state]);

  // console.log(mana, state?.mana);
  return (
    <div className="mana_bar">
      <div className="mana_unit">
        <div className="mana_unit_text">{mana}/10</div>
      </div>
      <div className="mana_bar_render">
        <div className="mana_bar_fill" style={{ width: `${mana * 10}%` }}></div>
      </div>
    </div>
  );
};

export default ManaBar;
