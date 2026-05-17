import React, { useCallback } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { Popular } from '@shared/models/popular';
import { useGetPopularContentQuery, useNowPlayingMovieQuery, useUpcomingMovieQuery } from '@features/home/api/home-api';

import { ContentHorizontalScrollableList } from '../components';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const { data: popularContentData, isLoading: popularLoading } = useGetPopularContentQuery();
  const { data: nowPlayingContentData, isLoading: nowPlayingLoading } = useNowPlayingMovieQuery(1);
  const { data: upcomingMovies, isLoading: upcomingMovieLoading } = useUpcomingMovieQuery(1);

  const Loader = useCallback(() => {
    if (nowPlayingLoading || popularLoading || upcomingMovieLoading) return <ActivityIndicator />;
    return null;
  }, [nowPlayingLoading, popularLoading, upcomingMovieLoading]);

  const onPressItem = useCallback((item: Popular) => {
    router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } });
  }, []);

  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: AppColors.primary }}
      contentContainerStyle={{ paddingBottom: insets.bottom, backgroundColor: AppColors.primary }}>
      <Header isHaveHeader={true} leftIconShown={false} />
      <Loader />
      {popularContentData && (
        <ContentHorizontalScrollableList
          title="Keşfet"
          contentList={popularContentData.results}
          onPressItem={onPressItem}
        />
      )}
      {nowPlayingContentData && (
        <ContentHorizontalScrollableList
          title="Now Playing"
          contentList={nowPlayingContentData.results}
          onPressItem={onPressItem}
        />
      )}
      {upcomingMovies && (
        <ContentHorizontalScrollableList
          title="Upcoming"
          contentList={upcomingMovies.results}
          onPressItem={onPressItem}
        />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
