import React, { Suspense, useCallback, useMemo, useRef } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';

import { useMovieCastByMovieIdQuery, useMovieDetailsByIdQuery } from '@features/movie-details/api/movie-details-api';
import useLocalStorage from '@shared/hooks/use-local-storage';
import { Header, BottomSheet, Button } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { BASE_W500_URL } from '@shared/constants/app-config';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import { Popular } from '@shared/models/popular';
import { IFavoriteAndWatchLater, setFavories, setWatchLater } from '@features/user-library/store/user-library-slice';
import { useTranslation } from 'react-i18next';

import GorhomBottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './style';

import {
  CastList,
  GenreAndReleaseDate,
  Overview,
  ProductionCompaniesList,
  TitleAndRating,
  WatchListBottomSheetBody,
  AddFavoriteBottomSheetBody,
} from '../components';

const MovieDetailsScreen = () => {
  const { t } = useTranslation();
  const { SaveToStorageJSON } = useLocalStorage();
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const bottomSheetRef = useRef<GorhomBottomSheet>(null);
  const { favorites, watchLater } = useAppSelector(state => state.main);
  const watchListBottomSheetRef = useRef<GorhomBottomSheet>(null);
  const params = useLocalSearchParams<{ movie: string }>();
  const movie = JSON.parse(params.movie) as Popular;

  const {
    data: movieDetails,
    isLoading: movieDetailsIsLoading,
    error: movieDetailsError,
  } = useMovieDetailsByIdQuery(movie.id.toString());

  const {
    data: movieCast,
    isLoading: movieCastLoading,
    error: movieCastError,
  } = useMovieCastByMovieIdQuery(movie.id.toString());

  const isPageLoading = movieCastLoading || movieDetailsIsLoading;

  const handleAddFavorites = (id: string) => {
    const isFavoriteExist = favorites.some(item => item.id?.toString() === id);
    const newUpdatedArray: IFavoriteAndWatchLater[] = isFavoriteExist
      ? favorites.filter(item => item.id?.toString() !== id)
      : [
          ...favorites,
          {
            type: 'tvShow',
            ...movie!,
          },
        ];

    dispatch(setFavories(newUpdatedArray));
    SaveToStorageJSON('FAVORITES', newUpdatedArray);
    if (!isFavoriteExist) bottomSheetRef.current?.expand();
  };

  const handleAddWatchList = (id: string) => {
    const isItemExistInWatchList = watchLater.some(item => item?.id?.toString() === id);
    const newUpdatedArray: IFavoriteAndWatchLater[] = isItemExistInWatchList
      ? watchLater.filter(item => item?.id?.toString() !== id)
      : [
          ...watchLater,
          {
            type: 'tvShow',
            ...movie!,
          },
        ];
    dispatch(setWatchLater(newUpdatedArray));
    SaveToStorageJSON('WATCHLATER', newUpdatedArray);
    if (!isItemExistInWatchList) watchListBottomSheetRef.current?.expand();
  };

  const watchLaterButtonText = watchLater.some(item => item?.id?.toString() === movie.id.toString())
    ? t('app.details.removeWatchLater')
    : t('app.details.addWatchList');

  const rightIconName = useMemo(() => {
    if (isPageLoading) return undefined;
    if (favorites.some(item => item?.id?.toString() === movie.id.toString())) return 'HeartFilled';
    return 'HeartOutline';
  }, [isPageLoading, favorites]);

  const HeroImage = useCallback(
    () => (
      <Image
        source={{ uri: BASE_W500_URL + movieDetails?.backdrop_path }}
        style={styles.heroImage}
        priority="normal"
        cachePolicy="memory-disk"
        transition={1000}
      />
    ),
    [movie, movieDetails],
  );

  const Loading = () => (
    <View style={[styles.f1, styles.alignItemCenter]}>
      <ActivityIndicator color={AppColors.white} />
    </View>
  );

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
            <HeroImage />
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
  );
};

export default MovieDetailsScreen;
