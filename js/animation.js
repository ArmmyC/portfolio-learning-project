let aboutbg = gsap.timeline({
  scrollTrigger: {
    trigger: "#animation1",
    start: "-30% 90%",
    end: "bottom 0%",
    scrub: true,
    markers: true,
  },
});

aboutbg.to("#animation1", {
  clipPath: "circle(100%)",
});

let education = gsap.timeline({
  scrollTrigger: {
    trigger: "#animation2",
    start: "bottom 50%",
    end: "200% 50%",
    scrub: true,
    markers: true,
  },
});

education.to("#animation2", {
  y: "0%",
});

let about = gsap.timeline({
  scrollTrigger: {
    trigger: ".slideUp",
    start: "top 100%",
    end: "bottom 50%",
    scrub: false,
    markers: true,
    toggleActions: "play reverse play reverse",
  },
});

about.to(".slideUp", {
  y: "0%",
  opacity: "100%",
});
