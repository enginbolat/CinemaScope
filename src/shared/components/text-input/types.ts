import type { StyleProp, ViewStyle ,TextInputProps} from 'react-native'

import type { IconType } from '@shared/assets/icons'

export interface TextInput extends TextInputProps {
  showLeftIcon?: boolean;
  leftIconName?: IconType;
  leftIconOnPress?: () => void;
  leftIconColor?: string;
  showRightIcon?: boolean;
  rightIconName?: IconType;
  rightIconOnPress?: () => void;
  rightIconColor?: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
