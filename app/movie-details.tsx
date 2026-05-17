import { Stack } from 'expo-router'

import MovieDetailsScreen from '@features/movie-details/screens/movie-details-screen'

export default function MovieDetailsTab() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          title: '',
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
      <MovieDetailsScreen />
    </>
  )
}
