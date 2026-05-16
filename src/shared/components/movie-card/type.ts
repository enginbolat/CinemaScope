import { Popular } from '@shared/models/popular';
import { StyleProp, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native';

export type IMovileCardProps = {
  item: Popular;
  onPress: (item: Popular) => void;
  imageStyle?: StyleProp<ImageStyle>,
  containerStyle?: ViewStyle
};
