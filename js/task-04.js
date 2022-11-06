let counterValue = 0;
const decrementsBtn = document.querySelector('button[data-action="decrement"]');
const incrementsBtn = document.querySelector(
  'button[ data-action="increment"]'
);
const values = document.querySelector('#value');

decrementsBtn.addEventListener('click', () => {
  counterValue--;
  values.textContent = counterValue;
});

incrementsBtn.addEventListener('click', () => {
  counterValue++;
  values.textContent = counterValue;
});
