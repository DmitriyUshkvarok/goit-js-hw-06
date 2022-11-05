function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const valueColor = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

button.addEventListener('click', event => {
  const colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  valueColor.textContent = colorBody;
});
