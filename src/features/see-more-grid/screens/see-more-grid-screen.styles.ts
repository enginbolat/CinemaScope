import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing, STATIC_PADDING } from '@shared/constants/app-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.surface,
    paddingTop: AppSpacing.sm,
  },
  listStyle: {
    flex: 1,
    width: '100%',
  },
  listContainerStyle: {
    paddingHorizontal: STATIC_PADDING,
  },
  separator: {
    height: 12,
  },
})

export default styles
