"use strict";

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
  return Math.min(...numbers);
}

console.log(findSmallerNumber(numbers));

//Напиши функцію findLongestWord(string)
// //яка приймає довільний рядок
// //що складається лише з розділених слів
// //пробілом (параметр string)
// //і повертає найдовше слово в цій строкі
const string = "Nunc sed turpis a felis in nunc fringilla";

function findLongestWord(string) {
  const array = string.split(" ");
  let longestWord = array[0];
  for (const item of array) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  return longestWord;
}
console.log(findLongestWord(string));
