import type { TextStyle, TouchableOpacityProps } from 'react-native'

import type { IconType } from '@shared/assets/icons'
import type { AppTextType } from '@shared/constants/app-text-type'

export interface IButton extends TouchableOpacityProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
  text: string;
  loading?: boolean;
  textStyle?: TextStyle;
  textType?: keyof typeof AppTextType;
}
