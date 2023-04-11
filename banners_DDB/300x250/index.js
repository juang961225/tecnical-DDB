const animate = () => {
  const tl = gsap.timeline();
  tl.from(".background", { scaleX: 2, scaleY: 2, duration: 0.75, ease: "power2.inOut" });
  tl.from(".logo", { opacity: 0, duration: 1, ease: "power2.inOut" });
  tl.from(".title", { x: -250, duration: 1, ease: "power2.inOut" });
  tl.from(".copy", { x: -250, duration: 1, ease: "power2.inOut" });
  tl.from(".cta-wrapper", { scaleX: 0, scaleY: 0, duration: 0.3, ease: "power2.inOut" });
  tl.from(".cta-text", { opacity: 0, duration: 1, ease: "power2.inOut" });
};

animate();
