"use strict";

const users = [
  { name: "Mango", daysActive: 15 },
  { name: "Poly", daysActive: 4 },
  { name: "Ajax", daysActive: 27 },
  { name: "Chelsey", daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));


let { x, ...remaining } = { x: 1, a: 2, b: 3, c: 4 };
console.info(x); // 1
console.info(remaining); // {a: 2, b: 3, c: 4}
