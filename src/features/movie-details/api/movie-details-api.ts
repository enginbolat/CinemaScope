import { AppEndpoints } from '@shared/constants/app-endpoints';
import { api } from '@shared/api/base-api';
import { MovieDetails, CastRoot } from '@shared/models/index';

export const movieDetailsApi = api.injectEndpoints({
  endpoints: build => ({
    movieDetailsById: build.query<MovieDetails, string>({
      query: id => ({
        url: AppEndpoints.movieDetailsById(id).url,
        method: AppEndpoints.movieDetailsById(id).method,
      }),
    }),
    movieCastByMovieId: build.query<CastRoot, string>({
      query: movieId => ({
        url: AppEndpoints.movieCastByMovieId(movieId).url,
        method: AppEndpoints.movieCastByMovieId(movieId).method,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useMovieDetailsByIdQuery,
  useMovieCastByMovieIdQuery,
} = movieDetailsApi;
