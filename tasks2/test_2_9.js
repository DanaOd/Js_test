"use strict";

console.log("Задача 2.9");

// Задача 2 - 9
//Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:
// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins

// Разбей задачу на подзадачи с помощью функций.
// 1. Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни
// true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти
// символов включительно.

// 2. Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый
// логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет
// и false если логин уже используется.

// 3. Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку
// 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку
// 'Логин успешно добавлен!'

function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  } else return false;
}

function isLoginUnique(allLogins, login) {
  // for (let i = 0; i < allLogins.length; i += 1)
  //   if (theLogin === login) {
  //     return false;
  //   }
  // if (allLogins.includes(login)) {
  //   console.log("login exists");
  //   return false;
  // }
  // console.log("new login");
  // return true;
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  // if ((isLoginUnique(login) = true && isLoginValid(login) = true)) {
  //   message = SUCCESS;
  //   allLogins.push(login);
  //   // } else if (isLoginUnique(login) === false) или советую так - { !allLogins.includes(login)
  // } else if (isLoginUnique(allLogins, login) !== true) {
  //   message = REFUSAL;
  // } else {
  //   message = ERROR;
  // }

  if (isLoginUnique(allLogins, login) !== true) {
    message = REFUSAL;
  } else if (isLoginValid(login) !== true) {
    message = ERROR;
  } else {
    message = SUCCESS;
  }

  return message;
}

const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(allLogins, "Ajax"));
// 'Логин успешно добавлен!'
