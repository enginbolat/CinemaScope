import { Stack } from 'expo-router'

import SeeMoreGrid from '@features/see-more-grid/screens/see-more-grid-screen'

import { screenOptions } from './screenOptions'

export default function SeeMoreGridRoute() {
  return (
    <>
      <Stack.Screen
        options={{
          ...screenOptions,
        }}
      />
      <SeeMoreGrid />
    </>
  )
}
