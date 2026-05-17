import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Redirect } from 'expo-router';

import { AppColors } from '@shared/constants/app-colors';
import useLocalStorage from '@shared/hooks/use-local-storage';

export default function Index() {
  const { GetFromStorage } = useLocalStorage();
  const [route, setRoute] = useState<string | null>(null);

  useEffect(() => {
    GetFromStorage('ONBOARD').then(val => {
      setRoute(val === 'TRUE' ? '/(tabs)' : '/onboard');
    });
  }, []);

  if (!route) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={AppColors.white} />
      </View>
    );
  }

  return <Redirect href={route} />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
  },
});
