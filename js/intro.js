let intro = document.querySelector("#intro-bg");
let introheader = document.querySelector("#intro-text");
let introSpan = document.querySelectorAll(".intro-text");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 200);
    });

    setTimeout(() => {
      introSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
