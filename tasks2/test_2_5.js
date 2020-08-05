"use strict";

console.log("Задача 2.5");

// Задача 2 - 5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// function checkForSpam(str) {
//   const words = str.split(" ");
//   for (const word of words) {
//     console.log(word.toLowerCase());
//     let normalWords = [];
//     normalWords.push(word);
//   }
//   console.log(normalWords);
//   const forbidWord1 = "spam";
//   const forbidWord2 = "sale";

//   // let normalStr = words.toLowerCase();
//   if (words.includes(forbidWord1) || words.includes(forbidWord2)) {
//     return true;
//   }
//   return false;
// }

function checkForSpam(str) {
  const words = str.split(" ");
  let normalWords = [];
  for (const word of words) {
    normalWords.push(word.toLowerCase());
    console.log(normalWords);
  }

  const forbidWord1 = "spam";
  const forbidWord2 = "sale";

  // let normalStr = words.toLowerCase();
  if (normalWords.includes(forbidWord1) || normalWords.includes(forbidWord2)) {
    return true;
  }
  return false;
}

// 1. разбиваем строку на слова
// 2. инклудс

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
