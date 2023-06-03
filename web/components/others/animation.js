import { gsap } from "gsap";

gsap.registerEffect({
  name: "playCard",
  effect: (targets, config) => {
    const tl = gsap.timeline();
    return tl
      .to(targets, {
        duration: 0.6,
        y: "-=100",
        rotation: 50,
        scale: 0.8,
        ease: "power3.out",
        onComplete: config.onComplete,
      })
      .to(targets, {
        delay: -0.3,
        duration: 0.8,
        scale: 0.5,
        rotation: 90,
        x: window.innerWidth,
        y: window.innerHeight,
        ease: "power3.inOut",
      });
  },
});

export default gsap;

// So we can use it in the browser.
if (typeof window !== "undefined") {
  window.gsap = gsap;
}
