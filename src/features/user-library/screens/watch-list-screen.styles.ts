import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing, STATIC_PADDING } from '@shared/constants/app-constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.surface,
    alignItems: 'center',
    flex: 1,
  },
  tabContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: STATIC_PADDING,
  },
  listStyle: {
    flexGrow: 1,
    marginTop: AppSpacing.xl,
    width: '100%',
  },
  listContainerStyle: {
    paddingHorizontal: STATIC_PADDING,
    flexGrow: 1,
    width: '100%',
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    height: 12,
  },
})

export default styles
