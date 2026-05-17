import { Stack } from 'expo-router'

import SeeMoreGrid from '@features/see-more-grid/see-more-grid'

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
