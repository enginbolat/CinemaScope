import { AppColors } from '@shared/constants/app-colors';
import { STATIC_PADDING } from '@shared/constants/app-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
    gap: 12,
  },
  ph: {
    paddingHorizontal: STATIC_PADDING,
  },
});

export default styles;
