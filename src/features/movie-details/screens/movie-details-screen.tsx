import React, { Suspense, useMemo, useRef } from 'react'

import { ActivityIndicator, ScrollView, View } from 'react-native'

import { useTranslation } from 'react-i18next'
import { SafeAreaView , useSafeAreaInsets } from 'react-native-safe-area-context'

import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'

import type GorhomBottomSheet from '@gorhom/bottom-sheet'

import { useAppDispatch, useAppSelector } from '@app/store/store'

import { useMovieCastByMovieIdQuery, useMovieDetailsByIdQuery } from '@features/movie-details/api/movie-details-api'
import type { IFavoriteAndWatchLater} from '@features/user-library/store/user-library-slice'
import { setFavories, setWatchLater } from '@features/user-library/store/user-library-slice'

import { Header, BottomSheet, Button } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import { BASE_W500_URL } from '@shared/constants/app-config'
import useLocalStorage from '@shared/hooks/use-local-storage'
import type { Popular } from '@shared/models/popular'

const Loading = () => (
  <View style={[{ flex: 1 }, { alignItems: 'center' }]}>
    <ActivityIndicator color={AppColors.white} />
  </View>
)

type HeroImageProps = { backdropPath?: string }
const HeroImage = ({ backdropPath }: HeroImageProps) => (
  <Image
    source={{ uri: BASE_W500_URL + backdropPath }}
    style={{ width: '100%', height: 250 }}
    priority="normal"
    cachePolicy="memory-disk"
    transition={1000}
  />
)

import { styles } from './style'
import {
  CastList,
  GenreAndReleaseDate,
  Overview,
  ProductionCompaniesList,
  TitleAndRating,
  WatchListBottomSheetBody,
  AddFavoriteBottomSheetBody,
} from '../components'

const MovieDetailsScreen = () => {
  const { t } = useTranslation()
  const { SaveToStorageJSON } = useLocalStorage()
  const dispatch = useAppDispatch()
  const insets = useSafeAreaInsets()

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

  const handleAddFavorites = (id: string) => {
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

    dispatch(setFavories(newUpdatedArray))
    SaveToStorageJSON('FAVORITES', newUpdatedArray)
    if (!isFavoriteExist) bottomSheetRef.current?.expand()
  }

  const handleAddWatchList = (id: string) => {
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

  const rightIconName = useMemo(() => {
    if (isPageLoading) return undefined
    if (favorites.some(item => item?.id?.toString() === movie.id.toString())) return 'HeartFilled'
    return 'HeartOutline'
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoading, favorites])

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.rootContainer}>
        <Header
          isHaveHeader={false}
          rightIconName={rightIconName}
          rightIconOnPress={() => handleAddFavorites(movie.id.toString())}
        />
        <ScrollView
          style={styles.rootContainer}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Suspense fallback={<Loading />}>
            <HeroImage backdropPath={movieDetails?.backdrop_path} />
            <TitleAndRating title={movie.title} voteAverage={movieDetails?.vote_average ?? movie.vote_average} />
            <View style={styles.addWatchListButtonContainer}>
              <Button
                onPress={() => handleAddWatchList(movie.id.toString())}
                text={watchLaterButtonText}
                leftIcon="AccessTimeIcon"
              />
            </View>
            <GenreAndReleaseDate genres={movieDetails?.genres} releaseDate={movieDetails?.release_date} />
            <Overview overview={movie.overview} />
            <CastList cast={movieCast?.cast} />
            <ProductionCompaniesList companies={movieDetails?.production_companies} />
          </Suspense>
        </ScrollView>
      </SafeAreaView>

      {/* BottomSheets */}
      <BottomSheet
        ref={bottomSheetRef}
        onClose={() => bottomSheetRef.current?.close()}
        contentContainerStyle={styles.bottomSheetContentContainer}>
        <AddFavoriteBottomSheetBody onPress={() => bottomSheetRef.current?.close()} />
      </BottomSheet>
      <BottomSheet
        ref={watchListBottomSheetRef}
        onClose={() => watchListBottomSheetRef.current?.close()}
        enableDynamicSizing={true}
        contentContainerStyle={styles.bottomSheetContentContainer}>
        <WatchListBottomSheetBody onPress={() => watchListBottomSheetRef.current?.close()} />
      </BottomSheet>
    </View>
  )
}

export default MovieDetailsScreen
