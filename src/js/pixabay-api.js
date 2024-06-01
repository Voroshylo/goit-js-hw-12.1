import axios from 'axios';

const API_KEY = '44071791-e24b31a34b7a75e1ae02e9c2e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      Image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch images');
  }
  return response.data;
}