import { StyleSheet } from 'react-native'

import { STATIC_PADDING } from '@shared/constants/app-constants'
import { scale, scaleHeight } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  titleAndRatingContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: STATIC_PADDING,
    marginTop: scaleHeight(18),
    marginVertical: scaleHeight(12),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  starIcon: {
    height: scale(20),
    width: scale(20),
  },
})
