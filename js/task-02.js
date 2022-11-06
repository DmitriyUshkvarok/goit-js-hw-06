const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const emptyList = document.querySelector('#ingredients');
const fullList = [];

ingredients.forEach(items => {
  const item = document.createElement('li');
  item.textContent = items;
  item.classList.add('item');
  fullList.push(item);
});
emptyList.append(...fullList);
console.log(emptyList);
