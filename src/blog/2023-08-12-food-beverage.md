---
title: Food & Beverage
description: A dynamic grocery list
author: Kiron Roy
date: 2023-08-12T04:34:06.387Z
tags:
  - post
image: /assets/blog/fooddrkmode.png
imageAlt: Food, Grocery Items mobile view (dark mode enabled)
---
<!--StartFragment-->

<!--StartFragment-->

Created a dynamic grocery list. Type a query and tap. the correct image will appear.

D﻿ark and Light mode are available.

<!--EndFragment-->

*B﻿elow is a few of the items:*

* *[Butter, Irish](https://kironroy.dev/food_items/food_groceries#butter)*
* *[Mustard, Condiment, Ralph's](https://kironroy.dev/food_items/food_groceries#mustard)*
* *[Sweet Peppers, Jalapenos, Trader Joe's](https://kironroy.dev/food_items/food_groceries#sweet_peppers)*
* *[Ginger Ale, Ralph'](https://kironroy.dev/food_items/food_groceries#ginger_ale)*

  .﻿..

  > ### J﻿avaScript Code: 

  `'use strict';
  const element = document.body;`

  `function searchRitaList() {
    const input = document.getElementById('ritaInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('ritaList');
    const li = ul.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName('a')[0];
      const textValue = a.textContent || a.innerText;
      textValue.toUpperCase().indexOf(filter) > -1
        ? (li[i].style.display = '')
        : (li[i].style.display = 'none');
    }
  }`

  `const goToTopButton = document.getElementById('topBtn');`

  `window.onscroll = () => scrollFunction();`

  `const scrollFunction = () =>
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? (goToTopButton.style.display = 'block')
      : (goToTopButton.style.display = 'none');`

  `function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }`

  `document
    .getElementById('buttonInput')
    .addEventListener('click', function (event) {
      event.target.value === 'Dark Mode'
        ? (event.target.value = 'Light Mode')
        : (event.target.value = 'Dark Mode');
    });`

  `const darkOrLightMode = () => element.classList.toggle('dark-mode');`

  `const imagesCount = () =>
    (document.getElementById('image-count').innerHTML = Number of food items: ${
      document.images.length - 1
    });`

<!--EndFragment-->