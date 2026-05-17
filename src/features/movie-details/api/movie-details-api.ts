import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { MovieDetails, CastRoot } from '@shared/models/index'

export const movieDetailsApi = api.injectEndpoints({
  endpoints: build => ({
    movieDetailsById: build.query<MovieDetails, string>({
      keepUnusedDataFor: 3600,
      query: id => AppEndpoints.movieDetailsById(id),
    }),
    movieCastByMovieId: build.query<CastRoot, string>({
      keepUnusedDataFor: 3600,
      query: movieId => AppEndpoints.movieCastByMovieId(movieId),
    }),
  }),
  overrideExisting: false,
})

export const {
  useMovieDetailsByIdQuery,
  useMovieCastByMovieIdQuery,
} = movieDetailsApi
