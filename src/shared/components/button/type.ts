import { IconType } from '@shared/assets/icons';
import { AppTextType } from '@shared/constants/app-text-type';
import { TextStyle, TouchableOpacityProps } from 'react-native';

export interface IButton extends TouchableOpacityProps {
  leftIcon?: IconType;
  text: string;
  loading?: boolean;
  textStyle?: TextStyle;
  textType?: keyof typeof AppTextType;
}
