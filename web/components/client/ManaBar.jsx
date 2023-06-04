import React, { useEffect, useState } from "react";

const ManaBar = ({ mana }) => {
  const [pMana, setPMana] = useState(mana + 1);

  useEffect(() => {
    if (mana) {
      setPMana(mana + 1);
    }
  }, [mana]);

  return (
    <div className="mana_bar">
      <div className="mana_unit">
        <div className="mana_unit_text">{pMana}/10</div>
      </div>
      <div className="mana_bar_render">
        <div
          className="mana_bar_fill"
          style={{ width: `${pMana * 10}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ManaBar;
