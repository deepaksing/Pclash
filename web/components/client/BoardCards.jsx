import React from "react";
import "../../styles/gameboard.css";
import RenderBoardCharacher from "./RenderBoardCharacher";

const BoardCards = ({ state }) => {
  const boardCard = state?.board;

  return (
    <>
      {boardCard?.map((card, index) => {
        return <RenderBoardCharacher key={index} card={card} />;
      })}
    </>
  );
};

export default BoardCards;
