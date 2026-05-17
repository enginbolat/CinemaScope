import { Popular } from '@shared/models/popular';
import { StyleProp, ViewStyle } from 'react-native';

export type Props = {
  item: Popular;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};
