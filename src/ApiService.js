import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '32254353-1dfb89cd1067157c7e96d3ead';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '40',
});

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }


  async fetchImages() {
    try {
      const { data } = await axios.get(
        `${URL}?key=${API_KEY}&q=${this.searchQuery}&${searchParams}&page=${this.page}`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}