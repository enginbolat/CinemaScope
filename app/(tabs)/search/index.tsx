import { useState } from 'react'

import { Platform } from 'react-native'

import { Stack } from 'expo-router'

import SearchScreen from '@features/search/screens/search-screen'

const parsedPlatformVersion = parseInt(String(Platform.Version), 10)
const useNativeSearchBar = Platform.OS === 'ios' && parsedPlatformVersion >= 26

export default function SearchIndex() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      {useNativeSearchBar && (
        <Stack.SearchBar
          placement="automatic"
          placeholder="Search"
          onChangeText={e => setSearchTerm(e.nativeEvent.text)}
        />
      )}
      <SearchScreen searchTerm={searchTerm} setSearchTerm={setSearchTerm} showInput={!useNativeSearchBar} />
    </>
  )
}
