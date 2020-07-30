"use strict";

console.log("Задача 2.3");

// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  const stringArr = string.split(" ");
  console.log(stringArr);

  let bigWord = stringArr[0];
  console.log(bigWord.length);

  //   for (let i = 0; i < stringArr.length; i += 1) {
  //     if (bigWord.length < stringArr[i].length) {
  //       bigWord === stringArr[i];
  //       console.log("число меньше");

  //       console.log(stringArr[5].length);
  //       continue;
  //     }
  //     return bigWord;
  //   }

  for (const element of stringArr) {
    console.log(element);
    if (bigWord.length < element.length) {
      console.log(element.length);
      bigWord === element;
      console.log(`${bigWord}`);
      continue;
    }
  }
  return bigWord;
}

// 1. разбить строку на слова
// 2. сравнить длинну слов, если новое длиннее - то записать его

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
