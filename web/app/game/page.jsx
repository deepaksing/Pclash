"use client";
import React from "react";
import "../../styles/game.css";
import Healthbar from "@/components/client/Healthbar";

const Game = () => {
  return (
    <div className="game">
      <div className="enemy">
        {/* Enemy Details */}
        <div className="enemy_details">
          <div className="enemy_profile">
            <div className="enemy_name">MuffinTop</div>
            <div className="enemy_hero_name">Warden</div>
          </div>
        </div>

        {/* Enemy Cards */}
        <div className="enemy_play">
          <div className="enemy_playing_cards"></div>
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
      </div>
      <div className="game_element">
        <div className="enemy_card_thrown"></div>
        <div className="player_card_thrown"></div>
      </div>

      <div className="player">
        <div className="player_details">
          <div className="player_profile">
            <div className="player_name">Myth</div>
            <div className="player_hero_name">Grand Warden</div>
          </div>
        </div>

        <div className="player_cards">
          <div className="cards">
            <div className="card card1">
              <div className="card_inside">
                <div className="card_inside_charachter"></div>
                <div className="card_inside_charname"></div>
                <div className="card_inside_description"></div>
              </div>

              <div className="card_mana_required">
                <div className="card_mana__req_text">3</div>
              </div>

              <div className="card_attack_power">
                <div className="attack_power_text">2</div>
              </div>

              <div className="card_health_power">
                <div className="card_health_text">4</div>
              </div>
            </div>

            <div className="card card2">
              <div className="card_mana_required">
                <div className="card_mana__req_text">3</div>
              </div>

              <div className="card_attack_power">
                <div className="attack_power_text">2</div>
              </div>

              <div className="card_health_power">
                <div className="card_health_text">4</div>
              </div>
            </div>

            <div className="card card3">
              <div className="card_mana_required">
                <div className="card_mana__req_text">3</div>
              </div>

              <div className="card_attack_power">
                <div className="attack_power_text">2</div>
              </div>

              <div className="card_health_power">
                <div className="card_health_text">4</div>
              </div>
            </div>

            <div className="card card4">
              <div className="card_mana_required">
                <div className="card_mana__req_text">3</div>
              </div>

              <div className="card_attack_power">
                <div className="attack_power_text">2</div>
              </div>

              <div className="card_health_power">
                <div className="card_health_text">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
