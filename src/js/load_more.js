import { getPhoto } from './api';
import { createMarkup } from './markup';

const form = document.querySelector('form');
const input = form.elements.searchQuery;
const list = document.querySelector('.gallery');
const button = document.querySelector('.submitBtn');
const loadBtn = document.querySelector('.load-more');
let currentPage = 1;

function arePicturesPresent(container) {
  const pictures = container.querySelectorAll('.photo-card');

  return pictures.length > 0;
}

async function getGeneralMarkup(input) {
  try {
    const pictures = await getPhoto(input, currentPage);
    let valueOfPictures = currentPage * 40;
    list.insertAdjacentHTML('afterbegin', createMarkup(pictures.hits));
    if (pictures.totalHits < valueOfPictures) {
      loadBtn.classList.add('visually-hidden');
      console.log("We're sorry, but you've reached the end of search results.");
    }
  } catch {
    console.error(error);
  }
}

async function onLoad() {
  const currentInput = input.value;
  currentPage += 1;
  let valueOfPictures = currentPage * 40;
  try {
    const pictures = await getPhoto(currentInput, currentPage);
    list.insertAdjacentHTML('beforeend', createMarkup(pictures.hits));
    if (pictures.totalHits < valueOfPictures) {
      loadBtn.classList.add('visually-hidden');
      console.log("We're sorry, but you've reached the end of search results.");
    }
  } catch {
    console.error(error);
  }
}

button.addEventListener('click', async event => {
  event.preventDefault();
  loadBtn.classList.remove('visually-hidden');
  const picturesPresent = arePicturesPresent(list);
  if (input.value === '') {
    return console.log('please put down correct tag');
  }

  if (picturesPresent) {
    list.innerHTML = '';
    const currentInput = input.value;
    getGeneralMarkup(currentInput);
  } else {
    const currentInput = input.value;
    getGeneralMarkup(currentInput);
  }
});

loadBtn.addEventListener('click', onLoad);
