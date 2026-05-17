import React, { useCallback, useMemo, useRef } from 'react'

import type { TextInput as RNTextInput } from 'react-native'
import { ActivityIndicator, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { skipToken } from '@reduxjs/toolkit/query'
import { FlashList } from '@shopify/flash-list'

import { useGetPopularContentInfiniteQuery } from '@features/home/api/home-api'
import { useGetSearchResultsInfiniteQuery } from '@features/search/api/search-api'

import { Text, TextInput } from '@shared/components/index'
import useDebounce from '@shared/hooks/use-debounce'
import type { Popular } from '@shared/models'

import styles from './search-screen.styles'
import MovieCardWithInnerTitle from '../components/movie-card-with-inner-title'

const NUM_COLUMNS = 2
const DEBOUNCE_MS = 400

type Props = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  showInput?: boolean
}

const SearchScreen = ({ searchTerm, setSearchTerm, showInput = true }: Props) => {
  const router = useRouter()
  const searchInputRef = useRef<RNTextInput>(null)

  const debouncedTerm = useDebounce(searchTerm.trim(), DEBOUNCE_MS)
  const isSearchMode = debouncedTerm.length > 0

  const {
    data: popularInfinite,
    fetchNextPage: fetchNextPopular,
    hasNextPage: hasNextPopular,
    isFetching: isFetchingPopular,
    isFetchingNextPage: isFetchingNextPopular,
    isLoading: isLoadingPopular,
  } = useGetPopularContentInfiniteQuery()

  const {
    data: searchInfinite,
    fetchNextPage: fetchNextSearch,
    hasNextPage: hasNextSearch,
    isFetchingNextPage: isFetchingNextSearch,
    isLoading: isLoadingSearch,
  } = useGetSearchResultsInfiniteQuery(isSearchMode ? debouncedTerm : skipToken)

  const popularItems = useMemo(() => popularInfinite?.pages.flatMap(p => p.results) ?? [], [popularInfinite])
  const searchItems = useMemo(() => searchInfinite?.pages.flatMap(p => p.results) ?? [], [searchInfinite])

  const displayItems = isSearchMode ? searchItems : popularItems
  const isFetchingNextPage = isSearchMode ? isFetchingNextSearch : isFetchingNextPopular
  const hasNextPage = isSearchMode ? hasNextSearch : hasNextPopular

  const showListEmptySpinner =
    displayItems.length === 0 &&
    (isSearchMode ? isLoadingSearch : isLoadingPopular || (!popularInfinite?.pages?.length && isFetchingPopular))

  const handleLoadMore = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) return
    if (isSearchMode) fetchNextSearch()
    else fetchNextPopular()
  }, [fetchNextPopular, fetchNextSearch, hasNextPage, isFetchingNextPage, isSearchMode])

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

  const listFooter =
    displayItems.length > 0 && isFetchingNextPage ? (
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

  const list = (
    <FlashList
      ListHeaderComponent={ListHeader}
      onScroll={() => searchInputRef.current?.blur()}
      ListHeaderComponentStyle={{ marginBottom: 32 }}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item, index) => `item-${item.id ?? index}`}
      data={displayItems}
      renderItem={renderItem}
      ListEmptyComponent={showListEmptySpinner ? <ActivityIndicator /> : <Text text="List Is Empty" />}
      ListFooterComponent={listFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.4}
      contentContainerStyle={styles.flashListContent}
    />
  )

  return <SafeAreaView style={styles.container}>{list}</SafeAreaView>
}

export default SearchScreen
