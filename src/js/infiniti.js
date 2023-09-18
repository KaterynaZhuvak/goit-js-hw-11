import { getPhoto } from './api';
import { createMarkup } from './markup';

const form = document.querySelector('form');
const input = form.elements.searchQuery;
const list = document.querySelector('.gallery');
const button = document.querySelector('.submitBtn');
const target = document.querySelector('.js-guard');
let currentPage = 1;
let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

function arePicturesPresent(container) {
  const pictures = container.querySelectorAll('.photo-card');

  return pictures.length > 0;
}

async function getGeneralMarkup(input) {
  try {
    const pictures = await getPhoto(input, currentPage);
    let valueOfPictures = currentPage * 40;
    list.insertAdjacentHTML('afterbegin', createMarkup(pictures.hits));
    observer.observe(target);
    if (pictures.totalHits < valueOfPictures) {
      console.log("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', event => {
  event.preventDefault();
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

function onLoad(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      const currentInput = input.value;
      currentPage += 1;
      let valueOfPictures = currentPage * 40;
      try {
        const pictures = await getPhoto(currentInput, currentPage);
        list.insertAdjacentHTML('beforeend', createMarkup(pictures.hits));
        if (pictures.totalHits < valueOfPictures) {
          observer.unobserve(target);
          console.log(
            "We're sorry, but you've reached the end of search results."
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
}

let observer = new IntersectionObserver(onLoad, options);
