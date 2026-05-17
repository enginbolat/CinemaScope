import { useCallback } from 'react'

import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useLocalSearchParams, useRouter } from 'expo-router'

import { FlashList } from '@shopify/flash-list'

import {
  useGetPopularContentInfiniteQuery,
  useGetNowPlayingInfiniteInfiniteQuery,
  useGetUpcomingInfiniteInfiniteQuery,
} from '@features/home/api/home-api'

import { MovieCardWithDescription } from '@shared/components/index'
import type { Popular } from '@shared/models'

import styles from './see-more-grid.styles'

type SeeMoreType = 'popular' | 'upcoming' | 'now-playing'

const ItemSeparator = () => <View style={styles.separator} />

const SeeMoreGrid = () => {
  const router = useRouter()
  const { type } = useLocalSearchParams<{ type: SeeMoreType }>()

  const { data: popularData, fetchNextPage: fetchNextPopular } = useGetPopularContentInfiniteQuery(undefined, {
    skip: type !== 'popular',
  })
  const { data: nowPlayingData, fetchNextPage: fetchNextNowPlaying } = useGetNowPlayingInfiniteInfiniteQuery(
    undefined,
    {
      skip: type !== 'now-playing',
    },
  )
  const { data: upcomingData, fetchNextPage: fetchNextUpcoming } = useGetUpcomingInfiniteInfiniteQuery(undefined, {
    skip: type !== 'upcoming',
  })

  const data: Popular[] =
    type === 'popular'
      ? popularData?.pages.flatMap(p => p.results) ?? []
      : type === 'now-playing'
      ? nowPlayingData?.pages.flatMap(p => p.results) ?? []
      : upcomingData?.pages.flatMap(p => p.results) ?? []

  const fetchNextPage =
    type === 'popular' ? fetchNextPopular : type === 'now-playing' ? fetchNextNowPlaying : fetchNextUpcoming

  const renderItem = useCallback(
    ({ item }: { item: Popular }) => (
      <MovieCardWithDescription
        item={item}
        onPress={() => router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })}
      />
    ),
    [router],
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlashList<Popular>
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.listContainerStyle}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

export default SeeMoreGrid
