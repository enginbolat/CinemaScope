import { Stack } from 'expo-router'

import NetworkLogScreen from '@features/dev-tools/screens/network-log-screen'

export default function NetworkLogTab() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <NetworkLogScreen />
    </>
  )
}
