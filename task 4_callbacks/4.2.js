"use strict";

console.log("задача 4.2");

// Задача 4 - 2 Callback функция

// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr.Функция возвращает true или false в зависимости
// от того встречается ли элемент первый раз в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.Функция возвращает true или false в зависимости от того
// является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb
//   - функцию обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray заполняла
// новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) => {
//   // for (const el of arr) {
//   //   if (element === el) {
//   //     return false;
//   //   }
//   //   return true;
//   // }
//   console.log("is it unique?");
//   arr.indexOf(element) === index;
// };
const isUniq = (element, index, arr) => arr.indexOf(element) === index;

// обратить вниманеи на запись без скобок и if-ов
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  let numbers = [];
  // for (const el of array) {
  //   const passed = cb(el);
  //   if (passed) {
  //     numbers.push(el);
  //   }
  // }
  // return numbers;
  for (let i = 0; i < array.length; i += 1) {
    // значение по индексу i
    let element = array[i];
    let index = i;
    console.log(element, index);

    let passed = cb(element, index, array);
    if (passed) {
      console.log(true);
      numbers.push(element);
      console.log(numbers);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// [2, 4, 2]
