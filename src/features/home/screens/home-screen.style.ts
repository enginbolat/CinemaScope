import { StyleSheet } from 'react-native';
import { AppColors } from '@shared/constants/app-colors';
import { STATIC_PADDING } from '@shared/constants/app-constants';

export const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  container: {
    backgroundColor: AppColors.primary,
    alignItems: 'center',
  },
  containerBody: {
    justifyContent: 'center',
  },
  contentTitle: {
    marginLeft: STATIC_PADDING,
    marginVertical: 24,
  },
  contentListContainerStyle: {
    gap: 8,
    paddingHorizontal: STATIC_PADDING,
  },
});
