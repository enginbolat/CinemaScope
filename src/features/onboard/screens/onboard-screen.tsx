import { Image, View } from 'react-native';

import { Button, Text } from '@shared/components/index';
import Images from '@shared/assets/images/index';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavigationStackType } from '@app/navigation/main-navigation-stack';
import useLocalStorage from '@shared/hooks/use-local-storage';

const OnboardScreen = () => {
  const { SaveToStorage } = useLocalStorage();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationStackType>>();
  const navigateTo = async () => {
    await SaveToStorage('ONBOARD', 'TRUE');
    navigation.replace('BottomNavigation');
  };

  return (
    <View style={styles.container}>
      <Image source={Images.onboard} style={styles.image} />
      <View style={styles.textContainer}>
        <Text type="boldHeading620" text="Dilediğin Film ve Diziyi Keşfet" style={styles.text} />
        <Text
          type="regularHeading620"
          text="Favori türlerini seç, popüler yapımları incele ve izlenecekler listeni oluştur. Her şey elinin altında."
          style={styles.text}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={navigateTo} text="Devam Et" />
      </View>
    </View>
  );
};

export default OnboardScreen;
