'use strict';

const goToTopButton = document.getElementById('topBtn');

window.onscroll = () => scrollFunction();

const scrollFunction = () =>
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (goToTopButton.style.display = 'block')
    : (goToTopButton.style.display = 'none');

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const footerDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
  .format(today)
  .replace(',', ''); // Removes comma from the formatted string

document.getElementById('footer-date').innerHTML = footerDate;

topFunction();
