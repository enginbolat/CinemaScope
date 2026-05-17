import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Image, ImageBackground } from 'expo-image';

import { Button, Text } from '@shared/components/index';
import useLocalStorage from '@shared/hooks/use-local-storage';
import Images from '@shared/assets/images';

import { styles } from './onboard-screen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const BACKGROUND_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBd5W2JnI_pYLA3BaRwz-rGIx7yZBN_w3RqSu7s3TfDVhDfSzRr-nBLLXlBXHRFElaZRXtuQqB5JTpTkel8tEjxomG7wH1ZRsNtBu4i25Wzys-FATmD76YSOpRK1XKJJWoRBjlyvBz5Ag4Die_nYMhPDD997jt-zctF7eaMehGBOkc4xpO16hcIn7gTyOp6fk_Dz2TrCmswwyVigsfQLU-xL_yYWZmv-1mujc5jYVnZJ8PD0YA0aUsBail_VU5Dpyie7OJkJa4R5g';

const OnboardScreen = () => {
  const { SaveToStorage } = useLocalStorage();
  const router = useRouter();

  const navigateTo = async () => {
    await SaveToStorage('ONBOARD', 'TRUE');
    router.replace('/(tabs)');
  };

  return (
    <ImageBackground source={{ uri: BACKGROUND_IMAGE }} style={styles.f1}>
      <SafeAreaView style={[styles.innerContainer, styles.f1]}>
        <View style={styles.f1} />
        <View style={styles.iconContainer}>
          <Image source={Images.onboard} style={styles.icon} contentFit="fill" />
        </View>
        <View style={styles.textContainer}>
          <Text type="boldHeading340" text="CinemaScope" />
          <Text type="mediumHeading620" text="Immerse in the narrative." style={styles.subtitle} />
        </View>
        <View style={styles.f1} />
        <Button onPress={navigateTo} text="GET STARTED" />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardScreen;
