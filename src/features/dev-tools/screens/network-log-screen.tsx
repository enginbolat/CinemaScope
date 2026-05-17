import { useEffect, useState } from 'react'

import { Alert, FlatList, Pressable, Text as RNText, View } from 'react-native'

import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { useAppDispatch } from '@app/store/store'

import { setFavories, setWatchLater } from '@features/user-library/store/user-library-slice'

import type { NetworkLog } from '@shared/api/base-api'
import { clearLogs, requestLogs, setLogListener } from '@shared/api/base-api'
import { Text } from '@shared/components/index'
import useLocalStorage from '@shared/hooks/use-local-storage'

import { styles } from './network-log-screen.styles'
import LogEntry from '../components/log-box/log-box'

type Props = {
  insideBottomSheet?: boolean
}

const NetworkLogScreen = ({ insideBottomSheet = false }: Props) => {
  const dispatch = useAppDispatch()
  const { RemoveFromStorage } = useLocalStorage()
  const [logs, setLogs] = useState<NetworkLog[]>([...requestLogs])

  useEffect(() => {
    setLogListener(setLogs)
    return () => setLogListener(null)
  }, [])

  const onPressClean = () => {
    Alert.alert('Temizle', '', [
      {
        text: 'Network Logları',
        onPress: () => clearLogs(),
      },
      {
        text: 'Favoriler',
        onPress: async () => {
          dispatch(setFavories([]))
          await RemoveFromStorage('FAVORITES')
        },
      },
      {
        text: 'Daha Sonra İzle',
        onPress: async () => {
          dispatch(setWatchLater([]))
          await RemoveFromStorage('WATCHLATER')
        },
      },
      { text: 'İptal', style: 'cancel' },
    ])
  }

  const listProps = {
    data: logs,
    showsVerticalScrollIndicator: false,
    keyExtractor: (item: NetworkLog) => item.id.toString(),
    ListEmptyComponent: <RNText style={styles.data}>No logs yet</RNText>,
    ListHeaderComponent: (
      <View style={styles.titleContainer}>
        <Text text="Network" type="boldHeading620" />
        <Pressable onPress={onPressClean}>
          <Text text="Clean" type="boldSmall12" />
        </Pressable>
      </View>
    ),
    renderItem: ({ item }: { item: NetworkLog }) => <LogEntry item={item} />,
    contentContainerStyle: styles.container,
    style: styles.list,
  }

  if (insideBottomSheet) return <BottomSheetFlatList {...listProps} />
  return <FlatList {...listProps} />
}

export default NetworkLogScreen
