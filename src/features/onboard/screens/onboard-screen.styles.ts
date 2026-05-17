import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  container: {
    backgroundColor: AppColors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    paddingHorizontal: AppSpacing.lg,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 48,
    width: 54,
    marginBottom: AppSpacing.sm,
  },
  textContainer: {
    gap: AppSpacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: AppSpacing.xl,
  },
  subtitle: {
    color: AppColors.onSurfaceVariant,
    textAlign: 'center',
  },
})
