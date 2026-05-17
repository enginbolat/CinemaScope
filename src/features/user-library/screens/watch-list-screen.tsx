import React, { useState } from 'react'

import { FlatList, View } from 'react-native'

import { useRouter } from 'expo-router'

import { useAppSelector } from '@app/store/store'

import { Header, MovieCardWithDescription, TabSwitch } from '@shared/components/index'
import type { Popular } from '@shared/models/index'

import styles from './watch-list-screen.styles'
import { EmptyList } from '../components'

const TAB_SWITCH_TITLE = [{ title: 'Watch Later' }, { title: 'Favorites' }]

const WatchListScreen = () => {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { watchLater, favorites } = useAppSelector(state => state.main)
  const selectedTabDataList = selectedTab === 0 ? watchLater : favorites

  const renderItem = ({ item }: { item: Popular }) => (
    <MovieCardWithDescription
      item={item}
      onPress={() => router.push({ pathname: '/movie-details', params: { movie: JSON.stringify(item) } })}
    />
  )

  return (
    <View style={styles.container}>
      <Header leftIconShown={false} />
      <View style={styles.tabContainer}>
        <TabSwitch buttons={TAB_SWITCH_TITLE} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </View>
      {selectedTabDataList.length === 0 ? (
        <View style={styles.emptyListContainer}>
          {EmptyList(selectedTab === 0 ? { title: 'Watch Later' } : { title: 'Favorites' })}
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedTabDataList}
          renderItem={renderItem}
          style={styles.listStyle}
          contentContainerStyle={styles.listContainerStyle}
        />
      )}
    </View>
  )
}

export default WatchListScreen
