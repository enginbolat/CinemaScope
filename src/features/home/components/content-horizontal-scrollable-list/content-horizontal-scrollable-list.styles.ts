import { StyleSheet } from 'react-native'

import { AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  container: {
    gap: AppSpacing.sm,
  },
  ph: {
    paddingHorizontal: AppSpacing.lg,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  renderItemContainer: {
    marginRight: AppSpacing.sm,
  },
})
