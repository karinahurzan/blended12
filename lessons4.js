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
