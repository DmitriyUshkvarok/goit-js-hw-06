const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', event => {
  if (event.target.value.length == inputValue.getAttribute('data-length')) {
    inputValue.classList.add('valid');
    inputValue.classList.remove('invalid');
  } else {
    inputValue.classList.add('invalid');
    inputValue.classList.remove('valid');
  }
});
