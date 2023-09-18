import axios from 'axios';
// 39488984-2cdf64825ff5a66680c809fac
axios.defaults.headers.common['x-api-key'] =
  'live_xNlsBNR1EL34BK6Wbea8FpCcO90ihAQy1i4beoiTYcvycLQiUZHb5UOMBDprladk';

async function getPhoto() {
  const BASE_URL = 'https://pixabay.com/api/';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: '39488984-2cdf64825ff5a66680c809fac',
        q: 'flower',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getPhoto()