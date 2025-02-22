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
