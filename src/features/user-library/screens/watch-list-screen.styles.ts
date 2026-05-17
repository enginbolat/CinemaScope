import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { STATIC_PADDING } from '@shared/constants/app-constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.surface,
    alignItems: 'center',
    flex: 1,
  },
  tabContainer: {
    padding: STATIC_PADDING,
    width: '100%',
    alignItems: 'center',
  },
  listStyle: {
    flexGrow: 1,
    marginBottom: 32,
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
})

export default styles
