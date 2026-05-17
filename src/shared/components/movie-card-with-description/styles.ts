import { StyleSheet } from 'react-native'

import { AppRadius, AppSpacing } from '@shared/constants/app-constants'
import { scaleHeight, scaleWidth } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  container: {
    gap: AppSpacing.sm,
    flexDirection: 'row',
  },
  image: {
    borderRadius: AppRadius.md,
    height: scaleHeight(200),
    width: scaleWidth(120),
  },
  innerContainer: {
    flex: 1,
    gap: AppSpacing.sm,
  },
  titleRow: {
    alignItems: 'flex-start',
  },
  ratingWithIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  overview: {},
})
