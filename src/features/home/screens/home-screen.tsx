import React, { useCallback } from 'react'

import { ActivityIndicator, ScrollView } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { useGetPopularContentQuery, useNowPlayingMovieQuery, useUpcomingMovieQuery } from '@features/home/api/home-api'

import { Header } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import type { Popular } from '@shared/models/popular'

import { ContentHorizontalScrollableList } from '../components'

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null
  return <ActivityIndicator />
}

const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const { data: popularContentData, isLoading: popularLoading } = useGetPopularContentQuery()
  const { data: nowPlayingContentData, isLoading: nowPlayingLoading } = useNowPlayingMovieQuery(1)
  const { data: upcomingMovies, isLoading: upcomingMovieLoading } = useUpcomingMovieQuery(1)

  const onPressItem = useCallback((item: Popular) => {
    router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: AppColors.primary }}
      contentContainerStyle={{ paddingBottom: insets.bottom, backgroundColor: AppColors.primary }}>
      <Header isHaveHeader={true} leftIconShown={false} />
      <Loader isLoading={nowPlayingLoading || popularLoading || upcomingMovieLoading} />
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
  )
}

export default HomeScreen
