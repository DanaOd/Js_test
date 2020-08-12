"use strict";

console.log("Задача 3.3");

// Задача 3 - 3
//
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя
// самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
const findBestEmployee = function (employees) {
  // let results = Object.values(employees);
  // const bestEmployee = Math.max(...results);
  // return bestEmployee;

  let employeeArr = Object.entries(employees);
  let bestEmployee = "";
  let maxTasks = 0;
  for (const employee of employeeArr) {
    let key = employee[0];
    let value = employee[1];
    // console.log(`${key}: ${value}`);

    if (maxTasks < value) {
      maxTasks = value;
      bestEmployee = key;
    }
  }
  return `${bestEmployee}: ${maxTasks}`;
};

// хочу еще попробовать решить эту задачу через Math.max(). но не совсем понимаю как потом ключ выводить.

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
// console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
