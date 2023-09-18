import { getPhoto } from './api';

const form = document.querySelector('form');
const input = form.elements.searchQuery;
const list = document.querySelector('.gallery');
const button = document.querySelector('.submitBtn');
const loadBtn = document.querySelector('.load-more');
let currentPage = 1;

function onLoad() {
  const currentInput = input.value;
  currentPage += 1;
  let valueOfPictures = currentPage * 40;
  getPhoto(currentInput, currentPage)
    .then(data => {
      list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      if (data.totalHits < valueOfPictures) {
        loadBtn.classList.add('visually-hidden');
        console.log("We're sorry, but you've reached the end of search results.")
      }
      console.log(data);
    })
    .catch(() => console.log('error'));
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`
    )
    .join('');
}

button.addEventListener('click', event => {
  if (input.value === '') {
   return console.log('please put down correct tag')
  }

 

  loadBtn.classList.remove('visually-hidden');
  const currentInput = input.value;
  event.preventDefault();

  getPhoto(currentInput, currentPage)
    .then(data => {
      clearGallery();
        let valueOfPictures = currentPage * 40;
      list.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
      if (data.totalHits < valueOfPictures) {
        loadBtn.classList.add('visually-hidden');
        console.log("We're sorry, but you've reached the end of search results.")
      }
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error.message);
      throw error;
    });
});

loadBtn.addEventListener('click', onLoad);
