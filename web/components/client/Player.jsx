import React, { useEffect } from "react";
import Healthbar from "./Healthbar";
import "../../styles/player.css";
import ManaBar from "./ManaBar";

const Player = ({ hand, state, playerMana }) => {
  return (
    <>
      <div className="player_details">
        <div className="player_profile">
          <div className="player_name">Myth</div>
          <div className="player_hero_name">Grand Warden</div>
        </div>
      </div>

      <div className="player_cards">
        <div className="cards">
          {hand &&
            hand.map((hand, index) => {
              let cardClassname = `card card${index}`;
              // cardClassname = {state?.player.currentMana && hand.cost<=state?.player.currentMana};
              if (
                state &&
                hand.cost <= state.player.currentMana &&
                hand.position === "hand"
              )
                cardClassname = `card card${index} highlightCard`;
              return (
                <div className={cardClassname} key={hand.id} data-id={hand.id}>
                  <div className="card_inside">
                    <div className="card_inside_charachter"></div>
                    <div className="card_inside_charname">{hand.name}</div>
                    <div className="card_inside_description">
                      {hand.description}
                    </div>
                  </div>

                  <div className="card_mana_required">
                    <div className="card_mana__req_text">{hand.cost}</div>
                  </div>

                  <div className="card_attack_power">
                    <div className="attack_power_text">{hand.attack}</div>
                  </div>

                  <div className="card_health_power">
                    <div className="card_health_text">{hand.health}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="player_healthbar">
        <Healthbar state={state} />
      </div>

      <div className="player_mana_info">
        <ManaBar mana={playerMana} />
      </div>
    </>
  );
};

export default Player;
