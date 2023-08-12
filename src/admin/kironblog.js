"use strict";

const goToTopButton = document.getElementById("topBtn");

window.onscroll = () => scrollFunction();

const scrollFunction = () =>
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (goToTopButton.style.display = "block")
    : (goToTopButton.style.display = "none");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const footerDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

document.getElementById("footer-date").innerHTML = footerDate;

topFunction();
