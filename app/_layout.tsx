import '@core/i18n/i18n.config'

import { StyleSheet } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { Stack } from 'expo-router'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import useAppInit from '@root/hooks/useAppInit'
import useFontLoader from '@root/hooks/useFontLoader'
import { store } from '@root/store/store'

function AppContent() {
  useAppInit()
  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  const fontsLoaded = useFontLoader()

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
