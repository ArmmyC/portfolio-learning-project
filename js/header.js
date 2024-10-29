window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var headerbg = document.querySelector("#header-bg");
  header.classList.toggle("sticky", window.scrollY > 50);
  headerbg.classList.toggle("sticky", window.scrollY > 50);
});
