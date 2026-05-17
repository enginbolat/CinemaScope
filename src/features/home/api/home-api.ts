import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular, NowPlayingRoot } from '@shared/models/index'

export const homeApi = api.injectEndpoints({
  endpoints: build => ({
    getPopularContent: build.infiniteQuery<RootPopular, void, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
      },
      query: ({ pageParam }) => ({
        url: AppEndpoints.popular(pageParam).url,
        method: AppEndpoints.popular(pageParam).method,
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
  useGetPopularContentInfiniteQuery,
  useNowPlayingMovieQuery,
  useUpcomingMovieQuery,
} = homeApi
