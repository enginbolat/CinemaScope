import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { STATIC_PADDING } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  contentContainer: {
    paddingHorizontal: STATIC_PADDING,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.whiteBorder20,
    overflow: 'hidden',
  },
})
