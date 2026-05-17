import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular } from '@shared/models/index'

export const searchApi = api.injectEndpoints({
  endpoints: build => ({
    getSearchResults: build.infiniteQuery<RootPopular, string, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPageParam < lastPage.total_pages ? lastPageParam + 1 : undefined,
      },
      query: ({ queryArg: query, pageParam }) => ({
        url: AppEndpoints.searchContent(encodeURIComponent(query), pageParam).url,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetSearchResultsInfiniteQuery } = searchApi
