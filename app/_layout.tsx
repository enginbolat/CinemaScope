import '@core/i18n/i18n.config';

import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Geist_600SemiBold } from '@expo-google-fonts/geist';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

import { store } from '@app/store/store';
import { api } from '@shared/api/base-api';
import { setFavories, setWatchLater } from '@features/user-library/store/user-library-slice';
import useLocalStorage from '@shared/hooks/use-local-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppContent() {
  const dispatch = useDispatch();
  const { GetFromStorage } = useLocalStorage();

  useEffect(() => {
    const init = async () => {
      const favorites = await GetFromStorage<string>('FAVORITES');
      if (favorites) dispatch(setFavories(JSON.parse(favorites)));

      const watchLater = await GetFromStorage<string>('WATCHLATER');
      if (watchLater) dispatch(setWatchLater(JSON.parse(watchLater)));

      dispatch(api.util.resetApiState());
    };
    init();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSans_800ExtraBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Geist_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <BottomSheetModalProvider>
            <AppContent />
          </BottomSheetModalProvider>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
