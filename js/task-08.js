// const form = document.querySelector('.login-form');

// form.addEventListener('submit', OnFormSubmit);

// function OnFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     if (formData.value === '' && formData.name === '') {
//       return alert('Please fill in all the fields!');
//     }
//     console.log(value);
//     console.log(name);
//   });

//     event.currentTarget.reset();
// }

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('Please fill in all the fields!');
//   }
//   const userDetails = { email: email.value, Password: password.value };

//   console.log(userDetails);
//   event.currentTarget.reset();
// }
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const fullForm = { email: email.value, password: password.value };
  console.log(fullForm);
  event.currentTarget.reset();
});
