import { getPhoto } from './api';
import { createMarkup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

const form = document.querySelector('form');
const input = form.elements.searchQuery;
const list = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');
let currentPage = 1;

const lightbox = new SimpleLightbox('.photo-card a', {
  animationSpeed: 250,
  captionsData: 'alt',
});

function smoothScrol() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function arePicturesPresent(container) {
  const pictures = container.querySelectorAll('.photo-card');
  return pictures.length > 0;
}

function buildMarkupAndCheckGallery(value) {
  if (value) {
    list.innerHTML = '';
    const currentInput = input.value;
    getGeneralMarkup(currentInput);
  } else {
    const currentInput = input.value;
    getGeneralMarkup(currentInput);
  }
}

function checkMarkupForSpaces(input) {
  const picturesPresent = arePicturesPresent(list);
  if (input === '' || input.includes(' ')) {
    return Notiflix.Notify.warning(
      'Please put down correct tag or eliminate spaces'
    );
  } else {
    buildMarkupAndCheckGallery(picturesPresent);
  }
}

async function getGeneralMarkup(input) {
  try {
    currentPage = 1;
    const pictures = await getPhoto(input, currentPage);
    let valueOfPictures = currentPage * 40;
    Notiflix.Notify.success(
      `Hooray! We found ${pictures.totalHits} images of ${input}!`
    );
    list.insertAdjacentHTML('afterbegin', createMarkup(pictures.hits));
    lightbox.refresh();
    loadBtn.classList.remove('visually-hidden');
    if (pictures.totalHits < valueOfPictures) {
      loadBtn.classList.add('visually-hidden');
    }
  } catch (error) {
    loadBtn.classList.add('visually-hidden');
    Notiflix.Notify.failure('Sorry, something went wrong!');
  }
}

async function onLoad() {
  const currentInput = input.value;
  currentPage += 1;
  let valueOfPictures = currentPage * 40;
  try {
    const pictures = await getPhoto(currentInput, currentPage);
    list.insertAdjacentHTML('beforeend', createMarkup(pictures.hits));
    lightbox.refresh();
    smoothScrol();
    if (valueOfPictures % pictures.totalHits < 40) {
      loadBtn.classList.add('visually-hidden');
      return Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    loadBtn.classList.add('visually-hidden');
    Notiflix.Notify.failure('Sorry, something went wrong!');
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  checkMarkupForSpaces(input.value);
});

loadBtn.addEventListener('click', onLoad);
