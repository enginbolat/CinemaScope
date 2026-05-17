import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import { Pressable, TextInput as RNTextInput, View } from 'react-native'

import type { IconType } from '@shared/assets/icons'
import { Icon } from '@shared/components/index'
import { scaleHeight } from '@shared/helpers/helper'

import { styles } from './style'
import type { TextInput as CustomTextInputProps } from './type'

type PressableIconProps = {
  onPress?: () => void;
  icon?: IconType;
  color?: string;
};
const PressableIcon = ({ onPress: iconOnPress, icon, color }: PressableIconProps) => (
  <Pressable onPress={iconOnPress} style={styles.iconContainer}>
    <Icon name={icon || 'Search'} size={scaleHeight(20)} color={color ?? 'grey'} />
  </Pressable>
)

const TextInput = forwardRef<RNTextInput, CustomTextInputProps>((props, ref) => {
  const {
    value,
    onChangeText,
    onPress,
    leftIconName,
    showLeftIcon,
    leftIconOnPress,
    leftIconColor,
    rightIconName,
    showRightIcon,
    rightIconOnPress,
    rightIconColor,
    containerStyle,
    ...rest
  } = props

  const innerRef = useRef<RNTextInput>(null)
  useImperativeHandle(ref, () => innerRef.current as RNTextInput)

  const isShownRightIcon = useMemo(() => ((value?.length ?? 0) > 0) && showRightIcon, [value, showRightIcon])

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        {showLeftIcon && <PressableIcon onPress={leftIconOnPress} icon={leftIconName} color={leftIconColor} />}
        <RNTextInput
          ref={innerRef}
          onChangeText={onChangeText}
          value={value}
          style={styles.f1}
          maxLength={120}
          {...rest}
        />
        {isShownRightIcon && <PressableIcon onPress={rightIconOnPress} icon={rightIconName} color={rightIconColor} />}
      </View>
    </Pressable>
  )
})

export default TextInput
