import Link from "next/link";
import React from "react";
import "../../styles/app.css";

const App = () => {
  return (
    <div className="app">
      <div className="welcome_page">
        <div className="welcome_page_nav">
          <div className="play_game">
            <Link className="play_game_url" href={"/game"}>
              Play
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
