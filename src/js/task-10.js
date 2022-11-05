const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('button[data-create]');
const arrDivs = [];
let size = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    console.log(amount);
    size += 10;
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    arrDivs.push(div);
  }
  divBoxesRef.append(...arrDivs);
}

createBtnRef.addEventListener('click', create => {
  const value = inputRef.value;
  createBoxes(value);
});

destroyBtn.addEventListener('click', clear => {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
});
