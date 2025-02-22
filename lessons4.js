const input = document.querySelector("#alertInput");
const button = document.querySelector("#alertButton");

button.addEventListener("click", (event) => console.log(input.value));

//  <!-- Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів. -->

const btn = document.querySelector("#swapButton");
const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");

btn.addEventListener("click", switchInput);

function switchInput() {
  const rightInputValue = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = rightInputValue;
}

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passwordInput = document.querySelector("#passwordInput");
const passwordButton = document.querySelector("#passwordButton");

passwordButton.addEventListener("click", (event) => {
  if (passwordButton.textContent === "Розкрити") {
    passwordInput.type = "text";
    return (passwordButton.textContent = "Приховати");
  } else {
    passwordInput.type = "password";
    passwordButton.textContent = "Розкрити";
  }
});
/* Завдання 4 Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
 https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle 
*/

const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const box = document.querySelector("#box");

increaseBtn.addEventListener("click", () => {
  const currentHeight = Number.parseInt(getComputedStyle(box).height);
  const currentWidth = Number.parseInt(getComputedStyle(box).width);
  box.style.height = currentHeight + 10 + "px";
  box.style.width = currentWidth + 10 + "px";
});

decreaseBtn.addEventListener("click", () => {
  const currentHeight = Number.parseInt(getComputedStyle(box).height);
  const currentWidth = Number.parseInt(getComputedStyle(box).width);
  box.style.height = currentHeight - 10 + "px";
  box.style.width = currentWidth - 10 + "px";
});

// Завдання 7
// При натисканні на коло він повинен слідувати за курсором.
// При повторному натисканні він стає в початкове положення.

const circle = document.querySelector(".outerCircle");
let flag = false;

circle.addEventListener("click", (event) => {
  if (!flag) {
    window.addEventListener("mousemove", mouseMove);
    circle.style.position = "absolute";

    flag = true;
  } else {
    window.removeEventListener("mousemove", mouseMove);
    flag = false;
    circle.style.position = "static";
  }
});

function mouseMove(event) {
  circle.style.left = event.pageX - 20;
  circle.style.top = event.pageY - 20;
}

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const btnDouble = document.querySelector("#double");
const listItems = document.querySelectorAll(".listItem");
console.log(listItems);
btnDouble.addEventListener("click", doubleValue);

function doubleValue() {
listItems.forEach(el => el.textContent = Number(el.textContent)*2)
 }