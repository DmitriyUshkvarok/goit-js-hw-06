const inputChange = document.querySelector('#font-size-control');
const valueText = document.querySelector('#text');

inputChange.addEventListener('input', event => {
  valueText.style.fontSize = `${event.target.value}px`;
});
