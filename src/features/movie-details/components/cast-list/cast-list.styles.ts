import { StyleSheet } from 'react-native'

import { AppSpacing, STATIC_PADDING } from '@shared/constants/app-constants'
import { scale, scaleHeight } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  smallImage: {
    width: scale(64),
    height: scale(72),
    borderRadius: 999,
  },
  castListContainer: {
    marginLeft: STATIC_PADDING,
    marginVertical: scaleHeight(12),
  },
  horizontalListContentContainer: {
    paddingHorizontal: STATIC_PADDING,
  },
  castItemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: AppSpacing.md,
  },
})
