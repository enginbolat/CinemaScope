import type { StyleProp, ViewStyle , ImageStyle } from 'react-native'

import type { Popular } from '@shared/models/popular'

export type IMovileCardProps = {
  item: Popular;
  onPress: (item: Popular) => void;
  imageStyle?: StyleProp<ImageStyle>,
  containerStyle?: ViewStyle
};
