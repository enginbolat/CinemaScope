import React, { forwardRef, useCallback, useEffect, useState } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import GorhomBottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'

import { AppColors } from '@shared/constants/app-colors'

import type { BottomSheetProps } from './type'

const BottomSheet = forwardRef<GorhomBottomSheet, BottomSheetProps>((props, ref) => {
  const {
    children,
    onClose,
    contentContainerStyle,
    containerStyle,
    height,
    enableDynamicSizing = true,
    enablePanDownToClose = true,
    timeout,
  } = props
  const insets = useSafeAreaInsets()
  const [sheetIndex, setSheetIndex] = useState<number>(-1)

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index)
  }, [])

  const onChange = (index: number) => {
    handleSheetChanges(index)
    if (index === -1 && onClose) onClose()
  }

  const renderBackdrop = (renderBackdropProps: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...renderBackdropProps}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      style={{ backgroundColor: AppColors.sheetBackground }}
    />
  )

  useEffect(() => {
    if (!(timeout && sheetIndex !== -1)) return

    let currentSecond = timeout
    const countdown = setInterval(() => {
      if (currentSecond <= 0) {
        clearInterval(countdown)
      }

      currentSecond--
      if (currentSecond === 0 && onClose) {
        setSheetIndex(-1)
        onClose?.()
      }
    }, 1000)

    return () => {
      clearInterval(countdown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout, sheetIndex])

  return (
    <GorhomBottomSheet
      index={sheetIndex}
      ref={ref}
      onChange={onChange}
      snapPoints={height}
      backdropComponent={renderBackdrop}
      enableBlurKeyboardOnGesture
      enablePanDownToClose={enablePanDownToClose}
      enableDynamicSizing={enableDynamicSizing}
      onClose={onClose}
      containerStyle={[containerStyle]}>
      <BottomSheetView style={[contentContainerStyle, { paddingBottom: insets.bottom, paddingHorizontal: 20 }]}>
        {children}
      </BottomSheetView>
    </GorhomBottomSheet>
  )
})

export default BottomSheet
