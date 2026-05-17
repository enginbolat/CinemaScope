import { StyleSheet } from 'react-native'

import { AppSpacing, STATIC_PADDING } from '@shared/constants/app-constants.ts'

export const styles = StyleSheet.create({
  phStatic: {
    paddingHorizontal: STATIC_PADDING,
    paddingTop: AppSpacing.xl,
    gap: AppSpacing.sm,
  },
})
