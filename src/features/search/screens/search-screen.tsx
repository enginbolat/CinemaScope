import React, { useCallback, useMemo, useRef } from 'react'

import type { TextInput as RNTextInput } from 'react-native'
import { ActivityIndicator, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { FlashList } from '@shopify/flash-list'

import { useGetPopularContentInfiniteQuery } from '@features/home/api/home-api'

import { Text, TextInput } from '@shared/components/index'
import type { Popular } from '@shared/models'

import styles from './search-screen.styles'
import MovieCardWithInnerTitle from '../components/movie-card-with-inner-title'

const NUM_COLUMNS = 2

type Props = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  showInput?: boolean
}

const SearchScreen = ({ searchTerm, setSearchTerm, showInput = true }: Props) => {
  const router = useRouter()

  const searchInputRef = useRef<RNTextInput>(null)

  const {
    data: popularInfinite,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useGetPopularContentInfiniteQuery()

  const popularGridItems = useMemo(() => popularInfinite?.pages.flatMap(p => p.results) ?? [], [popularInfinite])

  const handleLoadMorePopular = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) return
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  const handleSearchBarOnPress = () => searchInputRef.current?.focus()
  const handleSearchBarRightIconOnPress = () => setSearchTerm('')

  const handleItemOnPress = useCallback(
    (item: Popular) => {
      router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })
    },
    [router],
  )

  const renderItem = useCallback(
    ({ item, index }: { item: Popular; index: number }) => {
      const columnIndex = index % NUM_COLUMNS
      return <MovieCardWithInnerTitle item={item} columnIndex={columnIndex} handleItemOnPress={handleItemOnPress} />
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const showListEmptySpinner =
    popularGridItems.length === 0 && (isLoading || (!popularInfinite?.pages?.length && isFetching))

  const listFooter =
    popularGridItems.length > 0 && isFetchingNextPage ? (
      <View style={styles.listFooterSpinner}>
        <ActivityIndicator />
      </View>
    ) : undefined

  const ListHeader = useMemo(
    () =>
      showInput ? (
        <TextInput
          ref={searchInputRef}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onPress={handleSearchBarOnPress}
          showRightIcon
          showLeftIcon
          leftIconName="Search"
          rightIconName="ChevronLeft"
          placeholder="Movies, genres, or directors..."
          rightIconOnPress={handleSearchBarRightIconOnPress}
          containerStyle={{ borderRadius: 999 }}
        />
      ) : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchTerm, showInput],
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        ListHeaderComponent={ListHeader}
        onScroll={() => searchInputRef.current?.blur()}
        ListHeaderComponentStyle={{ marginBottom: 32 }}
        numColumns={NUM_COLUMNS}
        keyExtractor={(item, index) => `item-${item.id ?? index}`}
        data={popularGridItems}
        renderItem={renderItem}
        ListEmptyComponent={showListEmptySpinner ? <ActivityIndicator /> : <Text text="List Is Empty" />}
        ListFooterComponent={listFooter}
        onEndReached={handleLoadMorePopular}
        onEndReachedThreshold={0.4}
        contentContainerStyle={styles.flashListContent}
      />
    </SafeAreaView>
  )
}

export default SearchScreen
