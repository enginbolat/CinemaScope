import type { StyleProp, ViewStyle } from 'react-native'

import type { Popular } from '@shared/models/popular'

export type Props = {
  item: Popular;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};
