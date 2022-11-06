const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('button[data-create]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrDivs = [];
  let size = 20;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    let elementDiv = document.createElement('div');
    elementDiv.style.backgroundColor = getRandomHexColor();
    elementDiv.style.width = `${size}px`;
    elementDiv.style.height = `${size}px`;
    arrDivs.push(elementDiv);
  }
  divBoxesRef.append(...arrDivs);
}

createBtnRef.addEventListener('click', create => {
  const values = inputRef.value;
  createBoxes(values);
});

destroyBtn.addEventListener('click', clear => {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
});
