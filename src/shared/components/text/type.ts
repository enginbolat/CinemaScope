import type { TextProps as RNTextProps } from 'react-native'

import type { AppTextType } from '@shared/constants/app-text-type'

export interface TextProps extends RNTextProps {
    type?: keyof typeof AppTextType,
    text: string
    color?: string;
}