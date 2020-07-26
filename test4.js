"use strict";

// Задача 4
console.log("Задача 4");

const orderPieces = 5;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

// Вариант 1

// if (totalPrice <= credits && orderPieces !== null) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (totalPrice > credits && orderPieces !== null) {
//   message = ACCESS_DENIED;
// } else {
//   message = CANCELED_BY_USER;
// }

// console.log(message);
// console.log(balanceCredit);

// Вариант 2, получше. Начала с false вариантов
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);
console.log(balanceCredit);
