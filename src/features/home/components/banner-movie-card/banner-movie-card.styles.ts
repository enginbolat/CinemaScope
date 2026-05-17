import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppRadius, AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 530,
    padding: 20,
  },
  f1: {
    flex: 1,
  },
  favoriteButton: {
    borderRadius: AppRadius.md,
    backgroundColor: AppColors.surfaceMid,
    justifyContent: 'center',
    alignItems: 'center',
    padding: AppSpacing.sm,
  },
  watchNowButton: {
    borderRadius: AppRadius.md,
    width: 178,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: AppSpacing.sm,
  },
  movieTitle: {
    marginVertical: AppSpacing.md,
  },
})
