import axios from 'axios';
import { anserError } from './notification';
import { page, processingPhoto } from './index';
export { doStuff };

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

const optionsSearch = searchParams.toString();
const doStuff = async searchText => {
  try {
    const photoData = await fetchSearch(searchText);
    processingPhoto(photoData);
  } catch (error) {
    console.log(error);
    anserError();
  }
};

const fetchSearch = async searchText => {
  const API_KEY = '38811526-651373b29693b9dc0a21ebd76';
  const BASE_URL = 'https://pixabay.com/api/';
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${searchText}&per_page=40&page=${page}&${optionsSearch}`
  );
  return response;
};