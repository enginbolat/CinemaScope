import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular } from '@shared/models/index'

export const searchApi = api.injectEndpoints({
  endpoints: build => ({
    getSearchResults: build.infiniteQuery<RootPopular, string, number>({
      keepUnusedDataFor: 120,
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 5,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) =>
          firstPageParam > 1 ? firstPageParam - 1 : undefined,
      },
      query: ({ queryArg: query, pageParam }) =>
        AppEndpoints.searchContent(encodeURIComponent(query), pageParam),
    }),
  }),
  overrideExisting: false,
})

export const { useGetSearchResultsInfiniteQuery } = searchApi
