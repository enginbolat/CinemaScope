import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
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
    gap: 32,
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
    paddingBottom: 32,
  },
})
