import { Button, Icon, Text } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { FC } from 'react';
import { View } from 'react-native';
import { styles } from '../../screens/style';
import { translate } from '@core/index';

type Props = {
  onPress: () => void;
};

const AddFavoriteBottomSheetBody: FC<Props> = ({ onPress }) => (
  <View style={styles.bottomSheetBodyContainer}>
    <Icon name="HeartFilled" color={AppColors.red[100]} height={40} width={40} />
    <Text text={translate('app.details.addedSuccessfulyToFavorites')} color="black" type="mediumBody16" />
    <Button onPress={onPress} text={translate('app.common.ok')} />
  </View>
);

export default AddFavoriteBottomSheetBody;
