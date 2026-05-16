import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import OnboardScreen from '@features/onboard/screens/onboard-screen';
import MovieDetailsScreen from '@features/movie-details/screens/movie-details-screen';
import { setFavories, setWatchLater } from '@features/user-library/store/user-library-slice';
import { api } from '@shared/api/base-api';
import { AppColors } from '@shared/constants/app-colors';
import useLocalStorage from '@shared/hooks/use-local-storage';
import { Popular } from '@shared/models/popular';
import BottomNavigationStack from './bottom-navigation-stack';

export enum MainNavigationpPages {
  Onboard = 'Onboard',
  BottomNavigation = 'BottomNavigation',
  MovieDetails = 'MovieDetails',
}

export type MainNavigationStackType = {
  Onboard: undefined;
  BottomNavigation: undefined;
  MovieDetails: {
    movie: Popular;
  };
};

const MainNavigationStack = () => {
  const dispatch = useDispatch();
  const { GetFromStorage } = useLocalStorage();
  const MainNavigation = createNativeStackNavigator<MainNavigationStackType>();
  const [initialRoute, setInitialRoute] = useState<keyof MainNavigationStackType | null>(null);

  useEffect(() => {
    const setupFavorites = async () => {
      const favorites = await GetFromStorage<string>('FAVORITES');
      if (favorites) {
        dispatch(setFavories(JSON.parse(favorites)));
      }
    };
    const setupWatchLater = async () => {
      const watchLater = await GetFromStorage<string>('WATCHLATER');
      if (watchLater) {
        dispatch(setWatchLater(JSON.parse(watchLater)));
      }
    };

    setupFavorites();
    setupWatchLater();
  }, []);

  useEffect(() => {
    dispatch(api.util.resetApiState());
  }, []);

  useEffect(() => {
    const getIsSawOnboard = async () => {
      const val = await GetFromStorage('ONBOARD');
      if (val === 'TRUE') {
        setInitialRoute('BottomNavigation');
      } else {
        setInitialRoute('Onboard');
      }
    };

    getIsSawOnboard();
  }, []);

  if (!initialRoute) {
    return (
      <View style={style.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <MainNavigation.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
      <MainNavigation.Screen name="Onboard" component={OnboardScreen} />
      <MainNavigation.Screen name="BottomNavigation" component={BottomNavigationStack} />
      <MainNavigation.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MainNavigation.Navigator>
  );
};

export default MainNavigationStack;

const style = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
  },
});
