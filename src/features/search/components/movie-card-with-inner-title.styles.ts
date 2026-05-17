import { StyleSheet } from 'react-native'

import { AppRadius, AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  ph: {
    paddingHorizontal: AppSpacing.lg,
  },
  gridCell: {
    flex: 1,
    marginBottom: AppSpacing.sm,
  },
  gridCellColFirst: {
    paddingRight: AppSpacing.sm / 2,
  },
  gridCellColRest: {
    paddingLeft: AppSpacing.sm / 2,
  },
  flashListContent: {
    paddingHorizontal: AppSpacing.lg,
  },
  backdropCard: {
    height: 254,
    width: '100%',
    borderRadius: AppRadius.md,
    overflow: 'hidden',
  },
  backdropOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  backdropContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdropFooter: {
    padding: AppSpacing.sm,
    gap: 4,
  },
  backdropRatingRow: {
    flexDirection: 'row',
  },
})
