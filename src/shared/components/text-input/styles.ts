import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors.ts'
import { AppRadius, AppSpacing } from '@shared/constants/app-constants'
import { scaleHeight } from '@shared/helpers/helper.ts'

export const styles = StyleSheet.create({
  container: {
    borderRadius: AppRadius.md,
    borderWidth: 1,
    borderColor: AppColors.white50,
    padding: AppSpacing.sm,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
    height: scaleHeight(48),
  },
  iconContainer: {
    justifyContent: 'center',
  },
  f1: {
    flex: 1,
  },
})
