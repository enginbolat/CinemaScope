import { Button, Icon, Text } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from '../../screens/style';

type Props = {
  onPress: () => void;
};

const AddFavoriteBottomSheetBody: FC<Props> = ({ onPress }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.bottomSheetBodyContainer}>
      <Icon name="HeartFilled" color={AppColors.red[100]} height={40} width={40} />
      <Text text={t('app.details.addedSuccessfulyToFavorites')} color="black" type="mediumBody16" />
      <Button onPress={onPress} text={t('app.common.ok')} />
    </View>
  );
};

export default AddFavoriteBottomSheetBody;
