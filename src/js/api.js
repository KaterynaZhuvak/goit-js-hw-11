import axios from 'axios';
// 39488984-2cdf64825ff5a66680c809fac
axios.defaults.headers.common['x-api-key'] =
  'live_xNlsBNR1EL34BK6Wbea8FpCcO90ihAQy1i4beoiTYcvycLQiUZHb5UOMBDprladk';

const BASE_URL = 'https://pixabay.com/api/';

export function getPhoto(input, page) {
  const params = new URLSearchParams({
    key: '39488984-2cdf64825ff5a66680c809fac',
    q: `${input}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  });
  return fetch(`${BASE_URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
