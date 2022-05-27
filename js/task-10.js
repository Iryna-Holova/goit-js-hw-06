function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInputEl = document.querySelector('#controls').children[0];
const createBtnEl = document.querySelector('#controls').children[1];
const destroyBtnEl = document.querySelector('#controls').children[2];
const container = document.querySelector('#boxes');

let boxSize = 30;

const createBoxes = (number) => {
  const newBoxes = [];
  for (let i = 1; i <= number; i += 1) {
    const currentColor = getRandomHexColor();
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = currentColor;
    boxSize += 10;
    
    newBoxes.push(newBox);
  }
  container.append(...newBoxes);
}

const destroyBoxes = () => {
  container.innerHTML = '';
  boxSize = 30;
}

createBtnEl.addEventListener('click', () => createBoxes(Number(numberInputEl.value)));
destroyBtnEl.addEventListener('click', destroyBoxes);