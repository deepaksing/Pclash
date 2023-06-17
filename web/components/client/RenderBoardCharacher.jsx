import React, { useEffect, useRef } from "react";

const RenderBoardCharacher = ({ card }) => {
  const Ref = useRef(null);

  useEffect(() => {
    gsap.effects.placeBoard(Ref.current, card.x, card.y).then(() => {
      gsap.effects.dealCards(Ref.current);
    });
  }, []);

  return (
    <>
      <div className="board_charachter" ref={Ref} data-id={card.id}>
        <div className="charachter_info">
          <div className="charachter_image"></div>
          <div className="charachter_attack">{card.attack}</div>
          <div className="charachter_health">{card.health}</div>
        </div>
      </div>
    </>
  );
};

export default RenderBoardCharacher;
