"use strict";

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

function getUsersWithEyeColor(users, color) {
  return users.filter((user) => user.eyeColor === color);
}

// console.log(getUsersWithEyeColor(users, "blue"));

// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

function getUsersWithGender(users, gender) {
  //   return users
  //     .filter((user) => user.gender === gender)
  //     .map((user) => user.name);
  return users.reduce((acum, user) => {
    if (user.gender === gender) {
      acum.push(user.name);
    }
    return acum;
  }, []);
}

// console.log(getUsersWithGender(users, "male"));

// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

function calculateTotalBalance(users) {
  return users.reduce((acum, user) => (acum += user.balance), 0);
}

// console.log(calculateTotalBalance(users));

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']

function getSortedUniqueSkills(users) {
  return users
    .flatMap((user) => user.skills)
    .filter((skill, i, arr) => arr.indexOf(skill) === i)
    .toSorted((a, b) => a.localeCompare(b));
}

// console.log(getSortedUniqueSkills(users));

function getSorted(users) {
  return users
    .reduce((acum, user) => {
      for (const i of user.skills) {
        if (!acum.includes(i)) {
          acum.push(i);
        }
      }
      return acum;
    }, [])
    .toSorted();
}

// console.log(getSorted(users));

//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// let id = 0

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

// const result = fruits.map((fruit) => {
//   fruit.price *= 0.8;
//   fruit.id = id;
//   id += 1;
//   return fruit;
// });

function makeDiscount(arrays, discount) {
  return arrays.map((fruit, index) => {
    //   fruit.price *= (100 - discount) * 0.01;
    // fruit.price *= (100 - discount) / 100;
    const discountedFruit = (fruit.price * (100 - discount)) / 100;
    // fruit.id = index + 1;
    return { ...fruit, price: discountedFruit, id: index + 1 };
  });
}

// console.log(makeDiscount(fruits, 20));
// console.log(makeDiscount(fruits, 30));
// console.log(makeDiscount(fruits, 40));


//* 12. Напиши клас Notes який управляє колекцією нотаток у приватній властивості items.
//Нотатка це об'єкт із властивостями id, text і priority
//Додай класу статичну властивість Priority,
//у якій зберігатиметься об'єкт із пріоритетами HIGHT, LOW.
//Додай методи addNote(note), removeNote(id) updatePriority(id, newPriority) getNotes()

class Notes {
    #items;
    static Priority = {
        HIGHT: "hight",
        LOW: "low",
    };
    constructor() {
        this.#items = [];
    }
    addNote(note) {
        this.#items.push(note);
    }
    removeNote(id) {
        const index = this.#items.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.#items.splice(index, 1);
        }
            // this.items = this.items.filter(note => note.id !== id); альтернативний варіант
    }
    updatePriority(id, newPriority) {
        const note = this.#items.find((item) => item.id === id);
        if(note) {
            note.priority = newPriority;
        }
    }
    getNotes() {
        return this.#items;
    }   
}

const note1 = new Notes();

note1.addNote({ id: 1, text: "Note1", priority: Notes.Priority.LOW });
note1.addNote({ id: 2, text: "Note2", priority: Notes.Priority.LOW });
note1.addNote({ id: 3, text: "Note3", priority: Notes.Priority.HIGHT });

// console.log(note1.getNotes());

// note1.removeNote(2);

// console.log(note1.getNotes());

// note1.updatePriority(3, Notes.Priority.LOW);

// console.log(note1.getNotes());




//Повернути об'єкт у якому вказується кількість тегів

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  
  // { js: 3, nodejs: 3, html: 2, css: 2, react: 2 }