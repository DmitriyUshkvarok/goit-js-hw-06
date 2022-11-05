let counterValue = 0;
const decrements = document.querySelector('button[data-action="decrement"]');
const increments = document.querySelector('button[data-action="increment"]');
const values = document.querySelector('#value');

decrements.addEventListener('click', () => {
  counterValue--;
  values.textContent = counterValue;
});

increments.addEventListener('click', () => {
  counterValue++;
  values.textContent = counterValue;
});

