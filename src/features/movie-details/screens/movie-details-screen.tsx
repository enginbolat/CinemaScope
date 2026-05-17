import { Suspense } from 'react'

import { ActivityIndicator, ScrollView, View } from 'react-native'

import { ImageBackground } from 'expo-image'

import { BottomSheet } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import { BASE_W500_URL } from '@shared/constants/app-config'

import {
  CastList,
  GenreAndReleaseDate,
  Overview,
  TitleAndRating,
  WatchListBottomSheetBody,
  AddFavoriteBottomSheetBody,
  ButtonRow,
} from '../components'
import { styles } from './movie-details-screen.styles'
import useMovieDetails from '../hooks/useMovieDetails'

const Loading = () => (
  <View style={[{ flex: 1 }, { alignItems: 'center' }]}>
    <ActivityIndicator color={AppColors.white} />
  </View>
)

const MovieDetailsScreen = () => {
  const {
    movieDetails,
    movieCast,
    handleAddFavorites,
    handleAddWatchList,
    watchLaterButtonText,
    rightIconName,
    movie,
    bottomSheetRef,
    watchListBottomSheetRef,
    insets,
  } = useMovieDetails()

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Suspense fallback={<Loading />}>
          <ImageBackground
            source={{ uri: BASE_W500_URL + movieDetails?.backdrop_path }}
            style={styles.backgroundImage}
            priority="normal"
            contentFit="cover"
            cachePolicy="memory-disk"
            transition={1000}>
            <GenreAndReleaseDate genres={movieDetails?.genres} />
            <TitleAndRating
              title={movie.title}
              voteAverage={movieDetails?.vote_average ?? movie.vote_average}
              voteCount={movieDetails?.vote_count}
            />
            <ButtonRow
              movie={movieDetails}
              handleAddFavorites={handleAddFavorites}
              handleAddWatchList={handleAddWatchList}
              watchLaterButtonText={watchLaterButtonText}
              rightIconName={rightIconName}
            />
          </ImageBackground>

          <Overview overview={movie.overview} />
          <CastList cast={movieCast?.cast} />
        </Suspense>
      </ScrollView>

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
