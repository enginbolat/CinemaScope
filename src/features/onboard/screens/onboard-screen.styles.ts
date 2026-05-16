import { AppColors } from '@shared/constants/app-colors';
import { STATIC_PADDING } from '@shared/constants/app-constants';
import { scaleHeight, scaleWidth } from '@shared/helpers/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: STATIC_PADDING,
    paddingBottom: STATIC_PADDING,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '125%',
  },
  textContainer: {
    gap: scaleWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleHeight(48),
  },
  text: {
    color: AppColors.white,
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
  },
  button: {
    bottom: 0,
    width: '100%',
    flex: 1,
  },
});
