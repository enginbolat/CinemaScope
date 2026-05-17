import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'
import { STATIC_PADDING } from '@shared/constants/app-constants'
import { scale, scaleHeight } from '@shared/helpers/helper'

export const styles = StyleSheet.create({
  f1: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: AppColors.primary,
  },
  alignItemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: scaleHeight(220),
  },
  titleAndRatingContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: STATIC_PADDING,
    marginTop: scaleHeight(18),
    marginVertical: scaleHeight(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  starIcon: {
    height: scale(18),
    width: scale(18),
  },
  releaseDateAndGenreContainer: {
    paddingHorizontal: STATIC_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  genreContainer: {
    gap: 4,
    flexDirection: 'row',
  },
  smallImage: {
    width: scale(128),
    height: scale(128),
    borderRadius: scale(8),
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
    marginRight: 8,
  },
  phStatic: {
    paddingHorizontal: STATIC_PADDING,
  },
  bottomSheetContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 32,
  },
  bottomSheetBodyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
    paddingTop: 24,
  },
  addWatchListButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: STATIC_PADDING,
    paddingBottom: 8,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
})
