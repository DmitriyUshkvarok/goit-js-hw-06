const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const element = images
  .map(
    callback =>
      `<li><img class='list_img' src=${callback.url} width='350' height='200' alt='${callback.alt}'></li>`
  )
  .join('');

console.log(element);

galleryList.insertAdjacentHTML('beforeend', element);

galleryList.style.listStyle = 'none';
galleryList.style.display = 'flex';
galleryList.style.justifyContent = 'space-between';
galleryList.style.flexWrap = 'wrap';
galleryList.style.padding = '0';
galleryList.style.margin = '0';

console.log(galleryList);

