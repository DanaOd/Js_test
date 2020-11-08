"use strict";

// // Задача 2
console.log("Задача 2");

const invoice = 150;
const stock = 200;

// варик 1

let message = " ";
if (invoice > stock) {
  message = "На складе недостаточно товаров!";
} else {
  message = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(message);

// варик 2, фиговый
console.log("Задача 2, через тернарный");

const message1 = "На складе недостаточно товаров!";

const message2 = "Заказ оформлен, с вами свяжется менеджер";
let availability;
availability = invoice <= stock ? message2 : message1;
console.log(availability);

// варик 3, правильный
console.log("Задача 2, верное решение");
const message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
