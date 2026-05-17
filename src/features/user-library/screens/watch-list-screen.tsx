import { useState } from 'react'

import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { FlashList } from '@shopify/flash-list'

import { Header, MovieCardWithDescription, TabSwitch } from '@shared/components/index'
import type { Popular } from '@shared/models/index'

import { useAppSelector } from '@root/store/store'

import styles from './watch-list-screen.styles'
import { EmptyList } from '../components'
import type { IFavoriteAndWatchLater } from '../store/user-library-slice'

const TAB_SWITCH_TITLE = [{ title: 'Watch Later' }, { title: 'Favorites' }]

const ItemSeparator = () => <View style={styles.separator} />

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
    <SafeAreaView style={styles.container}>
      <Header leftIconShown={false} />
      <View style={styles.tabContainer}>
        <TabSwitch buttons={TAB_SWITCH_TITLE} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </View>
      <FlashList<IFavoriteAndWatchLater>
        showsVerticalScrollIndicator={false}
        data={selectedTabDataList}
        extraData={selectedTab}
        renderItem={renderItem}
        style={styles.listStyle}
        contentContainerStyle={styles.listContainerStyle}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList(selectedTab === 0 ? { title: 'Watch Later' } : { title: 'Favorites' })}
      />
    </SafeAreaView>
  )
}

export default WatchListScreen
