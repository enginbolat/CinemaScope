import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular, NowPlayingRoot } from '@shared/models/index'

export const homeApi = api.injectEndpoints({
  endpoints: build => ({
    getPopularContent: build.query<RootPopular, void>({
      query: () => ({
        url: AppEndpoints.popular.url,
        method: AppEndpoints.popular.method,
      }),
    }),
    nowPlayingMovie: build.query<NowPlayingRoot, number>({
      query: page => ({
        url: AppEndpoints.nowPlayingMovie(page).url,
        method: AppEndpoints.nowPlayingMovie(page).method,
      }),
    }),
    upcomingMovie: build.query<NowPlayingRoot, number>({
      query: page => ({
        url: AppEndpoints.upcomingMovie(page).url,
        method: AppEndpoints.upcomingMovie(page).method,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetPopularContentQuery,
  useNowPlayingMovieQuery,
  useUpcomingMovieQuery,
} = homeApi
