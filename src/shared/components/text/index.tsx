import type { FC } from 'react'

import { Text as RNText, StyleSheet } from 'react-native'

import { AppTextType } from '@shared/constants/app-text-type'

import type { TextProps } from './type'

const Text: FC<TextProps> = props => {
  const { style, text, type = 'regularSmall12', color = 'white', ...rest } = props

  const textStyle = StyleSheet.compose(style, AppTextType[type])

  return (
    <RNText style={[{ color }, textStyle]} {...rest}>
      {text}
    </RNText>
  )
}

export default Text
