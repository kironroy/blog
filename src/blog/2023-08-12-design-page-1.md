---
title: Design Page
description: GitHub wiki design page
author: Kiron Roy
date: 2023-08-12T02:29:11.223Z
tags:
  - post
image: /assets/blog/design.png
imageAlt: Github Wiki mobile view
---
D﻿esign page

<!--StartFragment-->

```
'use strict';

console.log(
  '%c Welcome to math.js! ',
  'color: #fff; font-weight: bold; font-family: Arial; background-color: blue; font-size: 24px'
);

console.log(`
███╗   ███╗ █████╗ ████████╗██╗  ██╗    ██╗███████╗    ███████╗██╗   ██╗███╗   ██╗
████╗ ████║██╔══██╗╚══██╔══╝██║  ██║    ██║██╔════╝    ██╔════╝██║   ██║████╗  ██║
██╔████╔██║███████║   ██║   ███████║    ██║███████╗    █████╗  ██║   ██║██╔██╗ ██║
██║╚██╔╝██║██╔══██║   ██║   ██╔══██║    ██║╚════██║    ██╔══╝  ██║   ██║██║╚██╗██║
██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║    ██║███████║    ██║     ╚██████╔╝██║ ╚████║
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝╚══════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝
                                                                                  
`);

// Roses Store

// Monday sales for EACH type of rose: 120, 80, 60
// Tuesday sales for EACH type of rose: 90, 70, 40
// Wednesday sales for EACH type of rose: 60, 40, 20

// Red rose: $3
// White rose: $4
// Yellow rose: $2

const pricesForEachTypeRoseMatrix = math.matrix([[3, 4, 2]]);
const totalSalesForMTWMatrix = math.matrix([
  [120, 90, 60],
  [80, 70, 40],
  [60, 40, 20],
]);

function matrixMultiplierRoseStore(mrx1, mrx2) {
  const matrix1 = math.matrix(mrx1);
  const matrix2 = math.matrix(mrx2);

  const totalSalesMatrixArr = math.multiply(matrix1, matrix2);
  // Result [ [800, 630, 380] ]

  const totalSalesMatrixFlatArr = totalSalesMatrixArr.toArray().flat();

  const totalSalesToHTML = totalSalesMatrixFlatArr.reduce((a, b) => a + b, 0);

  document.getElementById(
    'roses'
  ).innerHTML = `Total sales as a 2-dimensional array: ${totalSalesMatrixArr}`;

  document.getElementById(
    'roses-flat'
  ).innerHTML = `Are Total sales a flattened array: ${Array.isArray(
    totalSalesMatrixFlatArr
  )}`;
  document.getElementById(
    'mon-sales'
  ).innerHTML = `Monday Sales: $ ${totalSalesMatrixFlatArr[0]}`;
  document.getElementById(
    'tue-sales'
  ).innerHTML = `Tuesday Sales: $ ${totalSalesMatrixFlatArr[1]}`;
  document.getElementById(
    'wed-sales'
  ).innerHTML = `Wednesday Sales: $ ${totalSalesMatrixFlatArr[2]}`;
  document.getElementById(
    'total-sales'
  ).innerHTML = `Total rose Sales: $ ${totalSalesToHTML}`;
}

matrixMultiplierRoseStore(pricesForEachTypeRoseMatrix, totalSalesForMTWMatrix);

// Tacos Store

// 6 taco choices (1 row: 6 elements): beef = 2, chicken = 2, asada = 4, carnitas = 3, beans = 1, potato = 2
// 6 days of the week (6 rows): Mon, Tues, Wed, Thu, Fri, Sat

const pricesForEachTypeTacoMatrix = math.matrix([[2, 2, 4, 3, 1, 2]]);
const totalWeeklyTacoSalesMatrix = math.matrix([
  [20, 30, 10, 40, 50, 60],
  [22, 32, 12, 44, 40, 10],
  [40, 40, 50, 60, 80, 50],
  [60, 40, 50, 60, 80, 50],
  [10, 12, 14, 10, 12, 14],
  [10, 10, 10, 10, 10, 10],
]);

function matrixMultiplierTacosStore(mrx1, mrx2) {
  const matrix1 = math.matrix(mrx1);
  const matrix2 = math.matrix(mrx2);

  const totalSalesMatrixArr = math.multiply(matrix1, matrix2);
  // Result [[454, 436, 428, 618, 772, 524]]

  const totalTacosSalesMatrixFlatArr = totalSalesMatrixArr.toArray().flat();

  const totalSalesToHTML = totalTacosSalesMatrixFlatArr.reduce(
    (a, b) => a + b,
    0
  );

  const totalTacoSalesMatrix = math.multiply(
    pricesForEachTypeTacoMatrix,
    totalWeeklyTacoSalesMatrix
  );

  document.getElementById(
    'tacos'
  ).innerHTML = `Total taco sales as a 2-dimensional array: ${totalTacoSalesMatrix}`;

  document.getElementById(
    'mon-taco-sales'
  ).innerHTML = `Monday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[0]}`;
  document.getElementById(
    'tue-taco-sales'
  ).innerHTML = `Tuesday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[1]}`;
  document.getElementById(
    'wed-taco-sales'
  ).innerHTML = `Wednesday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[2]}`;
  document.getElementById(
    'thu-taco-sales'
  ).innerHTML = `Thursday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[3]}`;
  document.getElementById(
    'fri-taco-sales'
  ).innerHTML = `Friday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[4]}`;
  document.getElementById(
    'sat-taco-sales'
  ).innerHTML = `Saturday Taco Sales: $ ${totalTacosSalesMatrixFlatArr[5]}`;
  document.getElementById(
    'total-taco-sales'
  ).innerHTML = `Total Sales: $ ${totalSalesToHTML}`;

  document.getElementById(
    'tacos-flat'
  ).innerHTML = `Are Total taco sales a flattened array: ${Array.isArray(
    totalTacosSalesMatrixFlatArr
  )}`;
}

matrixMultiplierTacosStore(
  pricesForEachTypeTacoMatrix,
  totalWeeklyTacoSalesMatrix
);

// sale price for each type of pie : [apple, cherry, blueberry]
const piePrices = [3, 4, 2];

// daily sales
const mondaySalesArr = [13, 8, 6];
const tuesSalesArr = [9, 7, 4];
const wedSalesArr = [7, 4, 0];
const thuSalesArr = [15, 6, 3];

const matrixMultiplier = (arr1, arr2) =>
  arr1.reduce((r, a, i) => r + a * arr2[i], 0);

const mondaySales = matrixMultiplier(piePrices, mondaySalesArr);
const tuesSales = matrixMultiplier(piePrices, tuesSalesArr);
const wedSales = matrixMultiplier(piePrices, wedSalesArr);
const thuSales = matrixMultiplier(piePrices, thuSalesArr);

const dailySalesArr = [];
dailySalesArr.push(mondaySales, tuesSales, wedSales, thuSales);

const dailySalesFunc = dailySalesArr.reduce((a, b) => a + b, 0);

function piesRenderToHTML() {
  document.getElementById(
    'mon-pie-sales'
  ).innerHTML = `Monday Sales: $ ${mondaySales}`;
  document.getElementById(
    'tue-pie-sales'
  ).innerHTML = `Tuesday Sales: $ ${tuesSales}`;
  document.getElementById(
    'wed-pie-sales'
  ).innerHTML = `Wednesday Sales: $ ${wedSales}`;
  document.getElementById(
    'thu-pie-sales'
  ).innerHTML = `Thursday Sales: $ ${thuSales}`;
  document.getElementById(
    'total-pie-sales'
  ).innerHTML = `Total Sales: $ ${dailySalesFunc}`;
}

piesRenderToHTML();

// -- UX FEATURES --

const element = document.body;

document
  .getElementById('buttonInput')
  .addEventListener('click', function (event) {
    event.target.value === 'Dark Mode'
      ? (event.target.value = 'Light Mode')
      : (event.target.value = 'Dark Mode');
  });

const darkOrLightMode = () => element.classList.toggle('dark-mode');

window.onscroll = function () {
  scrollBar();
};

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

topFunction();
```

<!--EndFragment-->