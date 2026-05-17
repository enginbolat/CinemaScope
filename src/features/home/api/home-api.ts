import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular, NowPlayingRoot } from '@shared/models/index'

export const homeApi = api.injectEndpoints({
  endpoints: build => ({
    getPopularContent: build.infiniteQuery<RootPopular, void, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 10,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) =>
          firstPageParam > 1 ? firstPageParam - 1 : undefined,
      },
      query: ({ pageParam }) => AppEndpoints.popular(pageParam),
    }),
    nowPlayingMovie: build.query<NowPlayingRoot, number>({
      query: page => AppEndpoints.nowPlayingMovie(page),
    }),
    upcomingMovie: build.query<NowPlayingRoot, number>({
      keepUnusedDataFor: 600,
      query: page => AppEndpoints.upcomingMovie(page),
    }),
    nowPlayingPages: build.infiniteQuery<NowPlayingRoot, void, number>({
      keepUnusedDataFor: 300,
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 10,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) =>
          firstPageParam > 1 ? firstPageParam - 1 : undefined,
      },
      query: ({ pageParam }) => AppEndpoints.nowPlayingMovie(pageParam),
    }),
    upcomingPages: build.infiniteQuery<NowPlayingRoot, void, number>({
      keepUnusedDataFor: 600,
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 10,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) =>
          firstPageParam > 1 ? firstPageParam - 1 : undefined,
      },
      query: ({ pageParam }) => AppEndpoints.upcomingMovie(pageParam),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetPopularContentInfiniteQuery,
  useNowPlayingMovieQuery,
  useUpcomingMovieQuery,
  useNowPlayingPagesInfiniteQuery,
  useUpcomingPagesInfiniteQuery,
} = homeApi
