import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import {
  useGetPopularContentInfiniteQuery,
  useNowPlayingMovieQuery,
  useUpcomingMovieQuery,
} from '@features/home/api/home-api'

import type { Popular } from '@shared/models'

import { BannerMovieCard, ContentHorizontalScrollableList } from '../components'
import { useHomeScreenStyles } from './home-screen.style'

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

  const handleOnPressSeeAll = (type: 'popular' | 'upcoming' | 'now-playing') => {
    router.push({ pathname: '/see-more-grid', params: { type } })
  }

  if (popularLoading || nowPlayingLoading || upcomingMovieLoading) {
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
          <BannerMovieCard movie={popularContentData?.results[1]} onPressItem={onPressItem} />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Now Playing"
            contentList={nowPlayingContentData?.results ?? []}
            handleOnPressSeeAll={() => handleOnPressSeeAll('now-playing')}
          />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Popular"
            contentList={popularContentData?.results ?? []}
            handleOnPressSeeAll={() => handleOnPressSeeAll('popular')}
          />
        </View>
        <View style={styles.itemContainer}>
          <ContentHorizontalScrollableList
            title="Upcoming"
            contentList={upcomingMovies?.results ?? []}
            handleOnPressSeeAll={() => handleOnPressSeeAll('upcoming')}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen
