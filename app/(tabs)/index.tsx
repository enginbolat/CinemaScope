import { Stack } from 'expo-router'

import HomeScreen from '@features/home/screens/home-screen'

export default function HomeTab() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HomeScreen />
    </>
  )
}
