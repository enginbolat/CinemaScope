import { Text as RNText, StyleSheet } from 'react-native'

import { AppTextType } from '@shared/constants/app-text-type'

import type { TextProps } from './types'

const Text = (props: TextProps) => {
  const { style, text, type = 'regularSmall12', color = 'white', ...rest } = props

  const textStyle = StyleSheet.compose(style, AppTextType[type])

  return (
    <RNText style={[{ color }, textStyle]} {...rest}>
      {text}
    </RNText>
  )
}

export default Text
