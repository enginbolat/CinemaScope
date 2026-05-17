import { useRef, useMemo } from 'react'

import type GorhomBottomSheet from '@gorhom/bottom-sheet'
import { t } from 'i18next'

import { useAppDispatch, useAppSelector } from '@app/store/store'

import type { IFavoriteAndWatchLater } from '@features/user-library/store/user-library-slice'
import { setFavorites, setWatchLater } from '@features/user-library/store/user-library-slice'

import type { IconType } from '@shared/assets/icons'
import useLocalStorage from '@shared/hooks/use-local-storage'
import type { Popular } from '@shared/models'

const useWatchActions = (movie: Popular) => {
  const dispatch = useAppDispatch()
  const { SaveToStorageJSON } = useLocalStorage()
  const { favorites, watchLater } = useAppSelector(state => state.main)

  const bottomSheetRef = useRef<GorhomBottomSheet>(null)
  const watchListBottomSheetRef = useRef<GorhomBottomSheet>(null)

  const handleAddFavorites = (id?: string) => {
    const isFavoriteExist = favorites.some(item => item.id?.toString() === id)
    const newUpdatedArray: IFavoriteAndWatchLater[] = isFavoriteExist
      ? favorites.filter(item => item.id?.toString() !== id)
      : [...favorites, { type: 'tvShow', ...movie }]

    dispatch(setFavorites(newUpdatedArray))
    SaveToStorageJSON('FAVORITES', newUpdatedArray)
    if (!isFavoriteExist) bottomSheetRef.current?.expand()
  }

  const handleAddWatchList = (id?: string) => {
    const isItemExistInWatchList = watchLater.some(item => item?.id?.toString() === id)
    const newUpdatedArray: IFavoriteAndWatchLater[] = isItemExistInWatchList
      ? watchLater.filter(item => item?.id?.toString() !== id)
      : [...watchLater, { type: 'tvShow', ...movie }]

    dispatch(setWatchLater(newUpdatedArray))
    SaveToStorageJSON('WATCHLATER', newUpdatedArray)
    if (!isItemExistInWatchList) watchListBottomSheetRef.current?.expand()
  }

  const watchLaterButtonText = watchLater.some(item => item?.id?.toString() === movie.id.toString())
    ? t('app.details.removeWatchLater')
    : t('app.details.addWatchList')

  const rightIconName: IconType = useMemo(
    () => (favorites.some(item => item?.id?.toString() === movie.id.toString()) ? 'HeartFilled' : 'HeartOutline'),
    [favorites, movie.id],
  )

  return {
    handleAddFavorites,
    handleAddWatchList,
    watchLaterButtonText,
    rightIconName,
    bottomSheetRef,
    watchListBottomSheetRef,
  }
}

export default useWatchActions
