import type { StyleProp, ViewStyle , ImageStyle } from 'react-native'

import type { Popular } from '@shared/models/popular'

export type IMovieCardProps = {
  item: Popular;
  imageStyle?: StyleProp<ImageStyle>,
  containerStyle?: ViewStyle
};
