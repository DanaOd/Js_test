"use strict";

// console.log("Задача 2.2");
// Задача 2-2
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку
// (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы.
//     Т.е.никаких for, while, do while, for of, for in, forEach или функциональных методов.

const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
  const wordsArr = message.split(" ");
  console.log(wordsArr);
  let quantity;
  quantity = wordsArr.length;
  console.log(quantity);

  return quantity * pricePerWord;
};

// 1. разбить строку на слова
// 2. подсчитать их кол - во в quantity
// 3. умножить на цену
// 4. вернуть реультат

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(calculateEngravingPrice("Uno", 100));
