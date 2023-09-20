import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '39488984-2cdf64825ff5a66680c809fac',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

async function getPhoto(input, page) {
  try {
    const response = await axios.get('', {
      params: {
        page: page,
        q: input,
      },
    });
    if (response.data.total === 0) {
      return;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { getPhoto };
