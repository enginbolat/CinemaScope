import React, { useMemo, useRef, useState } from 'react'

import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

import { BottomSheetModal } from '@gorhom/bottom-sheet'

import NetworkLog from '@features/dev-tools/screens/network-log-screen'

import Images from '@shared/assets/images'
import { Text, Icon } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import { IS_TEST } from '@shared/constants/app-config'
import { scale, scaleHeight, scaleWidth } from '@shared/helpers/helper'

import { styles } from './styles'
import type { IHeaderProps } from './types'

const STATIC_MAX_CLICK_FOR_LOG = 5

const Header = (props: IHeaderProps) => {
  const {
    isHaveHeader = true,
    title,
    titleType = 'boldHeading620',
    leftIconName,
    leftIconOnPress,
    leftIconShown = true,
    rightIconName,
    rightIconOnPress,
  } = props
  const router = useRouter()
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const canGoBack = router.canGoBack()
  const [clickCounter, setClickCounter] = useState<number>(0)

  const handleClick = () => {
    if (IS_TEST && clickCounter <= STATIC_MAX_CLICK_FOR_LOG) setClickCounter(prev => prev + 1)
    else if (IS_TEST && clickCounter >= STATIC_MAX_CLICK_FOR_LOG) {
      bottomSheetModalRef.current?.present()
      setClickCounter(0)
    }
  }

  const showLeftIcon = useMemo(() => {
    if (!leftIconShown) return
    return leftIconName || canGoBack
  }, [leftIconShown, leftIconName, canGoBack])

  const innerLeftIconOnPress = () => {
    if (leftIconOnPress) leftIconOnPress()
    if (canGoBack) router.back()
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handleClick}>
        <View style={styles.container}>
          {showLeftIcon && (
            <TouchableOpacity onPress={innerLeftIconOnPress} style={styles.leftIconContainer}>
              <Icon name="ChevronLeft" color={AppColors.white} size={scale(32)} />
            </TouchableOpacity>
          )}
          {title && !isHaveHeader && <Text type={titleType} text={title} style={styles.titleColor} />}
          {isHaveHeader && !title && (
            <Image
              source={Images.logo}
              resizeMethod="resize"
              resizeMode="contain"
              height={scaleHeight(64)}
              width={scaleWidth(64)}
              style={[styles.image, { transform: [{ translateX: -scaleWidth(64) / 6 }] }]}
            />
          )}
          {rightIconName && (
            <TouchableOpacity onPress={rightIconOnPress} style={styles.rightIconContainer}>
              <Icon size={24} name={rightIconName} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing={false}
        snapPoints={['100%']}
        handleIndicatorStyle={styles.bgColorPrimary}
        backgroundStyle={styles.bgColorPrimary}>
        <SafeAreaView style={styles.f1}>
          <NetworkLog />
        </SafeAreaView>
      </BottomSheetModal>
    </>
  )
}

export default Header
