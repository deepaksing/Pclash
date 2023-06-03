import { Draggable, gsap } from "gsap/all";

gsap.registerPlugin(Draggable);

function animateCardToHand(draggable) {
  // console.log(draggable);
  return gsap.to(draggable.target, {
    x: draggable.startX,
    y: draggable.startY,
  });
}

export const enabledragdrop = (playCard) => {
  const target = document.querySelector(".target");
  const board = document.querySelector(".board");
  const cardsContainer = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
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
        // let targetEl;
        // let i = targets.length;
        // while (--i > -1) {
        //   if (this.hitTest(targets[i], "40%")) {
        //     targetEl = targets[i];
        //     break;
        //   }
        // }

        let boardHit = false,
          targetHit = false;
        if (this.hitTest(board, "70%")) {
          boardHit = true;
        }
        if (this.hitTest(target, "10%")) targetHit = true;

        if (!boardHit) {
          if (!targetHit) animateCardToHand(this);
        } else {
          // board.appendChild(cardEl);
          // cardEl.style.transform = "none";
        }
        // console.log("boardhit : ", boardHit);

        if (!targetHit) {
          if (!boardHit) animateCardToHand(this);
        } else {
          playCard(cardEl.dataset.id, cardEl);
          // else animateCardToHand(this);
        }
      },
    });
  });
};
