import React from "react";
import Healthbar from "./Healthbar";
import "../../styles/enemy.css";

const Enemy = () => {
  return (
    <>
      <div className="enemy_details">
        <div className="enemy_profile">
          <div className="enemy_name">MuffinTop</div>
          <div className="enemy_hero_name">Warden</div>
        </div>
      </div>

      {/* Enemy Cards */}
      <div className="enemy_play">
        <div className="enemy_playing_cards"></div>

        {/* Enemy details */}
        <div className="enemy_playing_details">
          <div className="enemy_playing_hero"></div>
          <div className="enemy_mana_health">
            <div className="enemy_mana">
              <div className="mana_level_detail">2 / 5</div>
            </div>
            <div className="enemy_healthbar">
              <Healthbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enemy;
