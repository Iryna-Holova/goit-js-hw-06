function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const backGroundColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

const changeColor = () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  backGroundColorEl.textContent = `${newColor}`;
}

changeColorBtn.addEventListener('click', changeColor)