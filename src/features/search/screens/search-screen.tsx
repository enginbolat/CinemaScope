import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, TextInput as RNTextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import { MovieCardWithDescription, Text, TextInput } from '@shared/components/index';
import useDebounce from '@shared/hooks/use-debounce';
import { useGetSearchResultsQuery } from '@features/search/api/search-api';
import { useGetPopularContentQuery } from '@features/home/api/home-api';
import styles from './search-screen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Popular } from '@shared/models';
import { FlashList } from '@shopify/flash-list';

const SearchScreen = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState<string>('');
  const searchInputRef = useRef<RNTextInput>(null);

  const debounceSearchTerm = useDebounce(keyword, 200);
  const shouldTriggerSearch = useMemo(() => debounceSearchTerm.trim().length >= 1, [debounceSearchTerm, keyword]);
  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetSearchResultsQuery(
    {
      query: debounceSearchTerm,
      page: 1,
    },
    { skip: debounceSearchTerm.trim().length >= 1 },
  );

  const { data: popularContentData, isLoading: popularLoading } = useGetPopularContentQuery();

  const handleSearchBarOnPress = () => searchInputRef.current?.focus();
  const handleSearchBarRightIconOnPress = () => setKeyword('');

  const safeData = useMemo(() => {
    if (shouldTriggerSearch && searchResults?.results?.length) {
      return searchResults.results;
    }
    return popularContentData?.results ?? [];
  }, [searchResults, popularContentData, shouldTriggerSearch]);

  const handleItemOnPress = (item: Popular) =>
    router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } });

  const renderItem = useCallback(
    ({ item }: { item: Popular }) => (
      <MovieCardWithDescription
        item={item}
        onPress={() => handleItemOnPress(item)}
        containerStyle={{ marginBottom: 12 }}
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        ref={searchInputRef}
        value={keyword}
        onChangeText={setKeyword}
        onPress={handleSearchBarOnPress}
        showRightIcon
        showLeftIcon
        leftIconName="Search"
        rightIconName="ChevronLeft"
        placeholder="Search whatever you want"
        rightIconOnPress={handleSearchBarRightIconOnPress}
        containerStyle={{ marginHorizontal: 20 }}
      />
      {isLoading && <ActivityIndicator />}
      <FlashList
        keyExtractor={(item, index) => `item-${item.id ?? index}`}
        data={safeData}
        renderItem={renderItem}
        ListEmptyComponent={<Text text="List Is Empty" />}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
