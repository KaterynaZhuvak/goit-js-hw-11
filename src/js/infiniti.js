import { getPhoto } from './api';
import { createMarkup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

const form = document.querySelector('form');
const input = form.elements.searchQuery;
const list = document.querySelector('.gallery');
const button = document.querySelector('.submitBtn');
const target = document.querySelector('.js-guard');
let currentPage = 1;
let options = {
  root: null,
  rootMargin: '500px',
  threshold: 1.0,
};

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

async function getGeneralMarkup(input) {
  try {
    const pictures = await getPhoto(input, currentPage);
    Notiflix.Notify.success(
      `Hooray! We found ${pictures.totalHits} images of ${input}!`
    );
    let valueOfPictures = currentPage * 40;
    list.insertAdjacentHTML('afterbegin', createMarkup(pictures.hits));
    smoothScrol();
    observer.observe(target);
    if (pictures.totalHits < valueOfPictures) {
      Notiflix.Notify.info(`We found only ${pictures.totalHits} pictures`);
    }
  } catch (error) {
    Notiflix.Notify.failure('Sorry, something went wrong!');
  }
}

button.addEventListener('click', event => {
  event.preventDefault();
  const picturesPresent = arePicturesPresent(list);
  if (input.value === '') {
    return Notiflix.Notify.warning('Please put down correct tag');
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

function onLoad(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      const currentInput = input.value;
      currentPage += 1;
      let valueOfPictures = currentPage * 40;
      try {
        const pictures = await getPhoto(currentInput, currentPage);
        if (pictures.totalHits < valueOfPictures) {
          observer.unobserve(target);

          return Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
        list.insertAdjacentHTML('beforeend', createMarkup(pictures.hits));
        smoothScrol();
      } catch (error) {
        loadBtn.classList.add('visually-hidden');
        Notiflix.Notify.failure('Sorry, something went wrong!');
      }
    }
  });
}

let observer = new IntersectionObserver(onLoad, options);

const lightbox = new SimpleLightbox('.photo-card a', {
  animationSpeed: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
