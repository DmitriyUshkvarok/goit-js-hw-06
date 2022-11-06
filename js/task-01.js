const fullList = document.querySelectorAll('.item');
console.log(`Number of categories: ${fullList.length}`);

fullList.forEach(items => {
  console.log(`Category: ${items.firstElementChild.textContent}`);
  console.log(`Elements: ${items.lastElementChild.children.length}`);
});
