import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppRadius, AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    gap: 16,
  },
  addWatchListButtonContainer: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    maxWidth: 300
  },
  favoriteButton: {
    borderRadius: AppRadius.md,
    backgroundColor: AppColors.surfaceMid,
    justifyContent: 'center',
    alignItems: 'center',
    padding: AppSpacing.sm,
    height: 60,
    width: 60,
  },
})
