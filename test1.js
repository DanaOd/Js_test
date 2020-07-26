"use strict";

// console.log("Добро пожаловать, задача 1");

// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// console.log(secondMessage);

// // Задача 2
// console.log("Задача 2");

// const invoice = 150;
// const stock = 200;

// // варик 1

// // let message = " ";
// // if (invoice > stock) {
// //   message = "На складе недостаточно товаров!";
// // } else {
// //   message = "Заказ оформлен, с вами свяжется менеджер";
// // }
// // console.log(message);

// // варик 2, фиговый
// console.log("Задача 2, через тернарный");

// const message1 = "На складе недостаточно товаров!";

// const message2 = "Заказ оформлен, с вами свяжется менеджер";
// let availability;
// availability = invoice <= stock ? message2 : message1;
// console.log(availability);

// // варик 3, правильный
// console.log("Задача 2, верное решение");
// const message =
//   invoice <= stock
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";

// console.log(message);

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

if (totalPrice <= credits && orderPieces !== null) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (totalPrice > credits && orderPieces !== null) {
  message = "Недостаточно средств на счету!";
} else {
  message = "Отменено пользователем!";
}

console.log(message);
console.log(balanceCredit);

// Write code under this line

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
