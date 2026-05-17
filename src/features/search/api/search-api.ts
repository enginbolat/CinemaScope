import { api } from '@shared/api/base-api'
import { AppEndpoints } from '@shared/constants/app-endpoints'
import type { RootPopular } from '@shared/models/index'

type SearchRequestParams = {
  query: string;
  page: number;
};

export const searchApi = api.injectEndpoints({
  endpoints: build => ({
    getSearchResults: build.query<RootPopular, SearchRequestParams>({
      query: ({ query, page }) => ({
        url: AppEndpoints.searchContent(encodeURIComponent(query), page).url,
        method: AppEndpoints.searchContent(query, page).method,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetSearchResultsQuery } = searchApi
