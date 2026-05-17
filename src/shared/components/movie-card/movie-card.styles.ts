import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppRadius, AppSpacing } from '@shared/constants/app-constants'
import { scaleWidth, scaleHeight } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: AppSpacing.unit,
    width: scaleWidth(140),
  },
  image: {
    height: scaleHeight(266),
    width: scaleWidth(140),
    borderRadius: AppRadius.md,
    borderWidth: 1,
    borderColor: AppColors.whiteBorder,
  },
  textContainer: {
    gap: AppSpacing.unit,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: AppSpacing.unit,
    color: 'white',
    flexShrink: 1,
  },
})
