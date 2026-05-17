import { useRef, useMemo } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useLocalSearchParams } from 'expo-router'

import type GorhomBottomSheet from '@gorhom/bottom-sheet'
import { t } from 'i18next'

import { useAppDispatch, useAppSelector } from '@app/store/store'

import type { IFavoriteAndWatchLater } from '@features/user-library/store/user-library-slice'
import { setFavorites, setWatchLater } from '@features/user-library/store/user-library-slice'

import type { IconType } from '@shared/assets/icons'
import useLocalStorage from '@shared/hooks/use-local-storage'
import type { Popular } from '@shared/models'

import { useMovieDetailsByIdQuery, useMovieCastByMovieIdQuery } from '../api/movie-details-api'

const useMovieDetails = () => {
  const insets = useSafeAreaInsets()
  const { SaveToStorageJSON } = useLocalStorage()
  const dispatch = useAppDispatch()

  const bottomSheetRef = useRef<GorhomBottomSheet>(null)
  const { favorites, watchLater } = useAppSelector(state => state.main)
  const watchListBottomSheetRef = useRef<GorhomBottomSheet>(null)
  const params = useLocalSearchParams<{ movie: string }>()
  const movie = JSON.parse(params.movie) as Popular

  const {
    data: movieDetails,
    isLoading: movieDetailsIsLoading,
    error: _movieDetailsError,
  } = useMovieDetailsByIdQuery(movie.id.toString())

  const {
    data: movieCast,
    isLoading: movieCastLoading,
    error: _movieCastError,
  } = useMovieCastByMovieIdQuery(movie.id.toString())

  const isPageLoading = movieCastLoading || movieDetailsIsLoading

  const handleAddFavorites = (id?: string) => {
    const isFavoriteExist = favorites.some(item => item.id?.toString() === id)
    const newUpdatedArray: IFavoriteAndWatchLater[] = isFavoriteExist
      ? favorites.filter(item => item.id?.toString() !== id)
      : [
          ...favorites,
          {
            type: 'tvShow',
            ...movie!,
          },
        ]

    dispatch(setFavorites(newUpdatedArray))
    SaveToStorageJSON('FAVORITES', newUpdatedArray)
    if (!isFavoriteExist) bottomSheetRef.current?.expand()
  }

  const handleAddWatchList = (id?: string) => {
    const isItemExistInWatchList = watchLater.some(item => item?.id?.toString() === id)
    const newUpdatedArray: IFavoriteAndWatchLater[] = isItemExistInWatchList
      ? watchLater.filter(item => item?.id?.toString() !== id)
      : [
          ...watchLater,
          {
            type: 'tvShow',
            ...movie!,
          },
        ]
    dispatch(setWatchLater(newUpdatedArray))
    SaveToStorageJSON('WATCHLATER', newUpdatedArray)
    if (!isItemExistInWatchList) watchListBottomSheetRef.current?.expand()
  }

  const watchLaterButtonText = watchLater.some(item => item?.id?.toString() === movie.id.toString())
    ? t('app.details.removeWatchLater')
    : t('app.details.addWatchList')

  const rightIconName: IconType = useMemo(() => {
    if (favorites.some(item => item?.id?.toString() === movie.id.toString())) return 'HeartFilled'
    return 'HeartOutline'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoading, favorites])

  return {
    movieDetails,
    movieCast,
    handleAddFavorites,
    handleAddWatchList,
    watchLaterButtonText,
    rightIconName,
    movie: JSON.parse(params.movie) as Popular,
    bottomSheetRef,
    watchListBottomSheetRef,
    insets,
  }
}

export default useMovieDetails
