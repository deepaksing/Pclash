import { gsap } from "gsap";

gsap.registerEffect({
  name: "placeBoard",
  effect: (targets, dropX, dropY) => {
    // gsap.killTweensOf(targets);
    gsap.set(targets, {
      x: 2 * dropX,
      y: 0,
      scale: 1.5,
      opacity: 0.8,
    });
    return gsap.to(targets, {
      duration: 0.5,
      scale: 1.5,
      opacity: 0.8,
      x: 0,
      y: 10,
    });
  },
});

gsap.registerEffect({
  name: "dealCards",
  effect: (targets, config) => {
    // gsap.killTweensOf(targets);
    gsap.set(targets, {
      x: 0,
      y: 10,
      scale: 1.5,
      opacity: 0.8,
    });
    return gsap.to(targets, {
      duration: 0.8,
      // delay: 0.2,
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      ease: "back.out(0.3)",
    });
  },
});

gsap.registerEffect({
  name: "playCard",
  effect: (targets, config) => {
    return gsap.to(targets, {
      x: config.startX,
      y: config.startY,
      duration: 0.9,
      delay: 0.2,
      ease: "power3.out",
    });
  },
});

export default gsap;

// So we can use it in the browser.
if (typeof window !== "undefined") {
  window.gsap = gsap;
}
