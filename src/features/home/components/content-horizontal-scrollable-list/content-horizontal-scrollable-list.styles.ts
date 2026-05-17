import { StyleSheet } from 'react-native'

import { AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  container: {
    gap: AppSpacing.sm,
  },
  ph: {
    paddingHorizontal: AppSpacing.lg,
  },
  renderItemContainer: {
    marginRight: AppSpacing.sm,
  },
})
