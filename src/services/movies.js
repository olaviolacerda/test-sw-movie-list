import api from '../config/api';

const getMovies = async () => {
  try {
    const {data} = await api.get('films/');

    return data.results;
  } catch (error) {
    return error;
  }
};

export default getMovies;
