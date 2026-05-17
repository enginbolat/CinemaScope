import { Button, Icon, Text } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from '../../screens/style';

type IWatchListBottomSheetBody = {
  onPress: () => void;
};

const WatchListBottomSheetBody: FC<IWatchListBottomSheetBody> = ({ onPress }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.bottomSheetBodyContainer}>
      <Icon name="AccessTimeIcon" color={AppColors.primary} />
      <Text text={t('app.details.addedWatchLater')} color="black" type="mediumBody16" />
      <Button onPress={onPress} text={t('app.common.ok')} />
    </View>
  );
};

export default WatchListBottomSheetBody;
