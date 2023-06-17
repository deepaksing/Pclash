import { Draggable, gsap } from "gsap/all";

gsap.registerPlugin(Draggable);

function animateCardToHand(draggable) {
  return gsap.to(draggable.target, {
    x: draggable.startX,
    y: draggable.startY,
  });
}

export const enabledragdrop = (state, playCard, selectCard) => {
  const target = document.querySelector(".target");
  const board = document.querySelector(".board");
  const cardInHand = document.querySelectorAll(".card");
  const cardsOnBoard = document.querySelectorAll(".board_charachter");

  const cards = [...Array.from(cardInHand), ...Array.from(cardsOnBoard)];

  cards.forEach((card) => {
    const id = card.dataset.id;
    let cardDetail = state?.hand?.filter((c) => id == c.id);
    let costReq = 100;
    if (cardDetail.length === 0) {
      cardDetail = state?.board.filter((c) => c.id == id);

      if (cardDetail.length) costReq = 0;
    } else costReq = cardDetail[0].cost;

    if (state?.player.currentMana >= costReq) {
      Draggable.create(card, {
        onDrag() {
          if (this.hitTest(board, "70%")) {
            board.classList.add("targethit");
          } else board.classList.remove("targethit");

          if (this.hitTest(target, "10%")) {
            target.classList.add("targethit");
          } else target.classList.remove("targethit");
        },
        onRelease() {
          const cardEl = this.target;

          let boardHit = false;
          let targetHit = false;
          if (this.hitTest(board, "70%")) boardHit = true;

          if (this.hitTest(target, "10%")) targetHit = true;

          //if we place the card on the board
          //1. if we dosent place the card on board then place to the original hand only
          if (!boardHit) {
            if (!targetHit) animateCardToHand(this);
          } else {
            const id = cardEl.dataset.id;
            let cardDetail = state?.hand?.filter((c) => id == c.id);
            if (cardDetail.length === 0) {
              cardDetail = state?.board.filter((c) => c.id == id);
            }
            const cardPos = cardDetail[0].position;
            if (cardPos === "hand") {
              selectCard(cardEl.dataset.id, cardEl, this);
              cardDetail[0].position = "board";
            } else if (cardPos === "board") animateCardToHand(this);
          }

          if (!targetHit) {
            if (!boardHit) animateCardToHand(this);
          } else {
            playCard(cardEl.dataset.id, cardEl, this);
            // else animateCardToHand(this);
          }
        },
      });
    } else {
      // Draggable.create(card, {
      //   onDragStart() {
      //     alert("low mana card");
      //   },
      // });
    }
  });
};
