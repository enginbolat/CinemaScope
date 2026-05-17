import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useLocalSearchParams } from 'expo-router'

import type { Popular } from '@shared/models'

import useWatchActions from './useWatchActions'
import { useMovieDetailsByIdQuery, useMovieCastByMovieIdQuery } from '../api/movie-details-api'

const useMovieDetails = () => {
  const insets = useSafeAreaInsets()
  const params = useLocalSearchParams<{ movie: string }>()
  const movie = JSON.parse(params.movie) as Popular

  const { data: movieDetails, isLoading: movieDetailsIsLoading } = useMovieDetailsByIdQuery(movie.id.toString())
  const { data: movieCast, isLoading: movieCastLoading } = useMovieCastByMovieIdQuery(movie.id.toString())

  const watchActions = useWatchActions(movie)

  return {
    movie,
    movieDetails,
    movieCast,
    isPageLoading: movieCastLoading || movieDetailsIsLoading,
    insets,
    ...watchActions,
  }
}

export default useMovieDetails
