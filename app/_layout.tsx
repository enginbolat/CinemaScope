import '@core/i18n/i18n.config'

import { useEffect } from 'react'

import { StyleSheet } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useDispatch, Provider } from 'react-redux'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

import { Geist_600SemiBold } from '@expo-google-fonts/geist'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'

import { store } from '@app/store/store'

import { setFavorites, setWatchLater } from '@features/user-library/store/user-library-slice'

import { api } from '@shared/api/base-api'
import useLocalStorage from '@shared/hooks/use-local-storage'

function AppContent() {
  const dispatch = useDispatch()
  const { GetFromStorage } = useLocalStorage()

  useEffect(() => {
    const init = async () => {
      const favorites = await GetFromStorage<string>('FAVORITES')
      if (favorites) dispatch(setFavorites(JSON.parse(favorites)))

      const watchLater = await GetFromStorage<string>('WATCHLATER')
      if (watchLater) dispatch(setWatchLater(JSON.parse(watchLater)))

      dispatch(api.util.resetApiState())
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_800ExtraBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Geist_600SemiBold,
  })

  if (!fontsLoaded) return null

  return (
    <ThemeProvider value={DarkTheme}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.f1}>
          <Provider store={store}>
            <BottomSheetModalProvider>
              <AppContent />
            </BottomSheetModalProvider>
          </Provider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  f1: { flex: 1 },
})
