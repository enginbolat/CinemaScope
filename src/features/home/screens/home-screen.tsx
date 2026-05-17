import React, { useMemo } from 'react'

import { ActivityIndicator, StatusBar, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { FlashList } from '@shopify/flash-list'

import {
  useGetPopularContentInfiniteQuery,
  useNowPlayingMovieQuery,
  useUpcomingMovieQuery,
} from '@features/home/api/home-api'

import type { Popular, Result } from '@shared/models'

import { BannerMovieCard, ContentHorizontalScrollableList } from '../components'
import { useHomeScreenStyles } from './home-screen.style'

type HomeSectionRow = Popular[] | Result[]

const HomeScreen = () => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const styles = useHomeScreenStyles({ insets })

  const { data: popularInfiniteData, isLoading: popularLoading } = useGetPopularContentInfiniteQuery()
  const popularContentData = popularInfiniteData?.pages[0]

  const { data: nowPlayingContentData, isLoading: nowPlayingLoading } = useNowPlayingMovieQuery(1)
  const { data: upcomingMovies, isLoading: upcomingMovieLoading } = useUpcomingMovieQuery(1)

  const onPressItem = (item: Popular) => {
    router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })
  }

  const renderItem = ({ item }: { item: HomeSectionRow }) => (
    <View style={styles.itemContainer}>
      <ContentHorizontalScrollableList title="Now Playing" contentList={item} />
    </View>
  )

  const sectionData: HomeSectionRow[] = useMemo(
    () => [nowPlayingContentData?.results ?? [], popularContentData?.results ?? [], upcomingMovies?.results ?? []],
    [nowPlayingContentData?.results, popularContentData?.results, upcomingMovies?.results],
  )

  if (popularLoading || nowPlayingLoading || upcomingMovieLoading) {
    return <ActivityIndicator />
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <FlashList<HomeSectionRow>
        data={sectionData}
        ListHeaderComponent={<BannerMovieCard movie={popularContentData?.results[1]} onPressItem={onPressItem} />}
        ListHeaderComponentStyle={styles.header}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        extraData={sectionData}
      />
    </React.Fragment>
  )
}

export default HomeScreen
