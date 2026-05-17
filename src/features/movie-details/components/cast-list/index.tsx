import React from 'react';
import Images from '@shared/assets/images';
import { AppColors } from '@shared/constants/app-colors';
import { BASE_W500_URL } from '@shared/constants/app-config';
import { Image } from 'expo-image';
import { Cast } from '@shared/models/cast';
import { View } from 'react-native';

import { styles } from '../../screens/style';
import { Text } from '@shared/components/index';
import { FlashList } from '@shopify/flash-list';

type Props = {
  cast: Cast[] | undefined;
};

const CastList = ({ cast }: Props) => {
  const renderItem = ({ item }: { item: Cast }) => {
    const imageSource = item.profile_path
      ? { uri: BASE_W500_URL + item.profile_path }
      : Images.profile;

    return (
      <View style={styles.castItemContainer}>
        <Image style={styles.smallImage} source={imageSource} contentFit="cover" priority="low" cachePolicy="memory-disk" transition={100}/>
        <Text text={item?.name} />
        <Text text={`as ${item?.character}`} color={AppColors.white50} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.castListContainer}>
        <Text type="mediumCaption14" text="Cast" />
      </View>
      <FlashList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        data={cast}
        contentContainerStyle={styles.horizontalListContentContainer}
        renderItem={renderItem}
      />
    </>
  );
};

export default CastList;
