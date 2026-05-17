import { useState } from 'react'

import { Stack } from 'expo-router'

import SearchScreen from '@features/search/screens/search-screen'

import useNativeSearchBar from '@shared/hooks/use-native-search-bar'

export default function SearchIndex() {
  const [searchTerm, setSearchTerm] = useState('')

  const { isNativeSearchBar } = useNativeSearchBar()

  return (
    <>
      {isNativeSearchBar && (
        <Stack.SearchBar
          placement="automatic"
          placeholder="Search"
          onChangeText={e => setSearchTerm(e.nativeEvent.text)}
        />
      )}
      <SearchScreen searchTerm={searchTerm} setSearchTerm={setSearchTerm} showInput={!isNativeSearchBar} />
    </>
  )
}
