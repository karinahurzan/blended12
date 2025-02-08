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

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.
const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

function caclculateAverage(array) {
  const newArr = [];
  let sum = 0;
  for (const item of array) {
    if (typeof item === "number") {
      newArr.push(item);
      sum += item;
    }
  }
  return sum / newArr.length;
}

console.log(caclculateAverage(arr));

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 300,
  Ben: 100,
  Poly: 160,
  Ajax: 1470,
  Bob: 450,
};

function sumSallaries(salaries) {
  let sum = 0;
  const array = Object.values(salaries);
  for (const salary of array) {
    sum += salary;
  }
  return sum;
}

sumSallaries(salaries);

console.log(sumSallaries(salaries));
console.log(sumSallaries([]));

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;

  for (const item of fruits) {
    if (item.name === fruitName) {
      totalPrice += item.price * item.quantity;
    }
  }
  return totalPrice;
}

console.log(calcTotalPrice(fruits, "Банан"));
