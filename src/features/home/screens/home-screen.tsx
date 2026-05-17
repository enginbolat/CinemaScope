import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import {
  useGetPopularContentInfiniteQuery,
  useNowPlayingPagesInfiniteQuery,
  useUpcomingPagesInfiniteQuery,
} from '@features/home/api/home-api'

import type { Popular } from '@shared/models'

import { BannerMovieCard, ContentHorizontalScrollableList } from '../components'
import { useHomeScreenStyles } from './home-screen.style'

const HomeScreen = () => {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const styles = useHomeScreenStyles({ insets })

  const { data: popularInfiniteData, isLoading: popularLoading } = useGetPopularContentInfiniteQuery()
  const { data: nowPlayingData, isLoading: nowPlayingLoading } = useNowPlayingPagesInfiniteQuery()
  const { data: upcomingData, isLoading: upcomingLoading } = useUpcomingPagesInfiniteQuery()

  const popularResults = popularInfiniteData?.pages[0]?.results ?? []
  const nowPlayingResults = nowPlayingData?.pages[0]?.results ?? []
  const upcomingResults = upcomingData?.pages[0]?.results ?? []

  const onPressItem = (item: Popular) => {
    router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })
  }

  const onSeeAll = (type: 'popular' | 'upcoming' | 'now-playing') => {
    router.push({ pathname: '/see-more-grid', params: { type } })
  }

  if (popularLoading || nowPlayingLoading || upcomingLoading) {
    return <ActivityIndicator />
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <BannerMovieCard movie={popularResults[1]} onPressItem={onPressItem} />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Now Playing"
            contentList={nowPlayingResults}
            onSeeAll={() => onSeeAll('now-playing')}
          />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Popular"
            contentList={popularResults}
            onSeeAll={() => onSeeAll('popular')}
          />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Upcoming"
            contentList={upcomingResults}
            onSeeAll={() => onSeeAll('upcoming')}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen
