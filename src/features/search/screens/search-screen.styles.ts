import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing } from '@shared/constants/app-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.surface,
    gap: AppSpacing.sm,
  },
  listFooterSpinner: {
    paddingVertical: AppSpacing.sm,
    alignItems: 'center',
  },
  flashListContent: {
    paddingHorizontal: AppSpacing.lg,
  },
})

export default styles
