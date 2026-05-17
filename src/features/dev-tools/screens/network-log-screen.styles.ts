import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors.ts'
import { AppSpacing, STATIC_PADDING } from '@shared/constants/app-constants.ts'

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: AppColors.surface,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: STATIC_PADDING,
    paddingBottom: AppSpacing.sm,
  },
  container: {
    backgroundColor: AppColors.surface,
    paddingHorizontal: STATIC_PADDING,
    paddingBottom: 24,
  },
  data: {
   backgroundColor: AppColors.surface,
    fontSize: 12,
  },
})
