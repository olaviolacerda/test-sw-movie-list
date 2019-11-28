import mockAxios from 'axios';
import {getMovies, getMovieDetails} from '../../services/movies';

jest.mock('axios');

describe('Movies Service test', () => {
  it('Should successfully get the movies', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          results: [{title: 'Revenge of the Sith'}, {title: 'A New Hope'}],
        },
      })
    );

    const movies = await getMovies();

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('films/');
    expect(movies.length).toEqual(2);
  });

  it('Should successfully get the movie details', async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          title: 'A new Hope',
          episode_id: 1,
          opening_crawl: 'Some description of the movie...',
        },
      })
    );

    const movieId = 1;

    const movie = await getMovieDetails(movieId);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('films/1/');
    expect(movie.title).toEqual('A new Hope');
    expect(movie.episode_id).toEqual(movieId);
  });
});
