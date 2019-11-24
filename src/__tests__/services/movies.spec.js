import mockAxios from 'axios';
import getMovies from '../../services/movies';

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
});
