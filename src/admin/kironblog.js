'use strict';

let today = new Date();

const footerDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
  .format(today)
  .replace(',', ''); // Removes comma from the formatted string

document.getElementById('footer-date').innerHTML = footerDate;

