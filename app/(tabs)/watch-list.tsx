import { Stack } from 'expo-router'

import WatchListScreen from '@features/user-library/screens/watch-list-screen'

export default function WatchListTab() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <WatchListScreen />
    </>
  )
}
