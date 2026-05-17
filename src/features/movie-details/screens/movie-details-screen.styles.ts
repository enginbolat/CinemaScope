import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing } from '@shared/constants/app-constants'
import { scaleHeight } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  f1: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: AppColors.primary,
  },
  alignItemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: scaleHeight(220),
  },
  bottomSheetContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: AppSpacing.xl,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: AppColors.surface,
  },

  backgroundImage: {
    width: '100%',
    height: 530,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: AppSpacing.xl,
  },
})
