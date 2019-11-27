import api from '../config/api';

const getMovies = async () => {
  try {
    const {data} = await api.get('films/');

    return data.results;
  } catch (error) {
    return error;
  }
};

const getMovieDetails = async movieId => {
  try {
    const {data} = await api.get(`films/${movieId}/`);

    return data;
  } catch (error) {
    return error;
  }
};

export {getMovies, getMovieDetails};
