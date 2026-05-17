import React, { useMemo } from 'react'

import { ActivityIndicator, TouchableOpacity } from 'react-native'

import Icon from '@shared/components/icon'
import Text from '@shared/components/text'
import { AppColors } from '@shared/constants/app-colors'

import { rawStyle } from './styles'
import type { IButton } from './types'

const Button = (props: IButton) => {
  const { onPress, text, loading, textStyle, disabled, style, textType = 'regularBody16', leftIcon, rightIcon } = props

  const isDisabled = useMemo(() => loading || disabled, [loading, disabled])
  const innerStyle = rawStyle(isDisabled)

  return (
    <TouchableOpacity onPress={onPress} style={[innerStyle.container, style]} disabled={disabled}>
      {leftIcon && !loading && <Icon name={leftIcon} height={24} width={24} />}
      {loading ? (
        <ActivityIndicator color={AppColors.white} />
      ) : (
        <Text type={textType} text={text} style={[textStyle, innerStyle.text]} />
      )}
      {rightIcon && !loading && <Icon name={rightIcon} height={24} width={24} />}
    </TouchableOpacity>
  )
}

export default Button
