const inputChange = document.querySelector('#font-size-control');
const valueText = document.querySelector('#text');

inputChange.addEventListener('change', event => {
  valueText.style.fontSize = `${event.target.value}px`;
});
