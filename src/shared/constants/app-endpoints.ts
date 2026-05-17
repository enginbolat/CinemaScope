type SwitchType = 'true' | 'false'

type SettingsType = {
  includeAdult?: SwitchType
  includeVideo?: SwitchType
  language?: string
  sortBy?: string
}

const INCLUDE_ADULT = (val?: SwitchType) => `include_adult=${val ?? 'true'}`
const INCLUDE_VIDEO = (val?: SwitchType) => `include_video=${val ?? 'true'}`
const LANGUAGE = (lang?: string) => `language=${lang ?? 'en-US'}`
const SORT_BY = (sort?: string) => `sort_by=${sort ?? 'popularity.desc'}`

export const AppEndpoints = {
  popular: (page: number = 1, settings?: SettingsType) => ({
    url: `/3/discover/movie?${INCLUDE_ADULT(settings?.includeAdult)}&${INCLUDE_VIDEO(settings?.includeVideo)}&${LANGUAGE(settings?.language)}&page=${page}&${SORT_BY(settings?.sortBy)}`,
    method: 'GET' as const,
  }),
  movieDetailsById: (id: string, language?: string) => ({
    url: `/3/movie/${id}?${LANGUAGE(language)}`,
    method: 'GET' as const,
  }),
  movieCastByMovieId: (movieId: string) => ({
    url: `/3/movie/${movieId}/credits`,
    method: 'GET' as const,
  }),
  nowPlayingMovie: (page: number = 1, language?: string) => ({
    url: `/3/movie/now_playing?${LANGUAGE(language)}&page=${page}`,
    method: 'GET' as const,
  }),
  upcomingMovie: (page: number = 1, language?: string) => ({
    url: `/3/movie/upcoming?${LANGUAGE(language)}&page=${page}`,
    method: 'GET' as const,
  }),
  searchContent: (query: string, page: number = 1, settings?: Pick<SettingsType, 'language' | 'includeAdult'>) => ({
    url: `/3/search/movie?query=${query}&${INCLUDE_ADULT(settings?.includeAdult)}&${LANGUAGE(settings?.language)}&page=${page}`,
    method: 'GET' as const,
  }),
}
