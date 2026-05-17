import { Dimensions, StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from '@shared/helpers/helper';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    borderRadius: 8,
    height: scaleHeight(200),
    width: scaleWidth(120),
  },
  innerContainer: {
    gap: 12,
  },
  titleRow: {
    alignItems: 'flex-start',
  },
  ratingWithIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  overview: {
    width: width - scaleWidth(165),
  },
});
