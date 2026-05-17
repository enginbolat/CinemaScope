import React from 'react';
import { Image, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Text } from '@shared/components/index';
import Images from '@shared/assets/images/index';
import useLocalStorage from '@shared/hooks/use-local-storage';
import { styles } from './onboard-screen.styles';

const OnboardScreen = () => {
  const { SaveToStorage } = useLocalStorage();
  const router = useRouter();

  const navigateTo = async () => {
    await SaveToStorage('ONBOARD', 'TRUE');
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.onboard} style={styles.image} />
      <View style={styles.textContainer}>
        <Text type="boldHeading620" text="Dilediğin Film ve Diziyi Keşfet" style={styles.text} />
        <Text
          type="regularHeading620"
          text="Favori türlerini seç, popüler yapımları incele ve izlenecekler listeni oluştur. Her şey elinin altında."
          style={styles.text}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.button}>
        <Button onPress={navigateTo} text="Devam Et" />
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
