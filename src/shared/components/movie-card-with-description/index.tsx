import React from 'react';
import { Pressable, View } from 'react-native';

import { Image } from 'expo-image';
import { BASE_W500_URL } from '@shared/constants/app-config';
import { scale } from '@shared/helpers/helper';
import Text from '@shared/components/text';
import { Star } from '@shared/assets/icons/star';

import { Props } from './type';
import { styles } from './style';

const MovieCardWithDescription = ({ item, onPress, containerStyle }: Props) => {
  const RatingRow = () => (
    <View style={styles.ratingWithIconRow}>
      <Star height={scale(18)} width={scale(18)} />
      <Text text={item.vote_average.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />
    </View>
  );

  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Image
        source={{ uri: BASE_W500_URL + item.poster_path }}
        style={styles.image}
        priority="high"
        cachePolicy="memory-disk"
        transition={100}
      />
      <View style={styles.innerContainer}>
        <View style={styles.titleRow}>
          <Text text={item.title} type="mediumBody16" numberOfLines={1} />
          <RatingRow />
        </View>
        <Text text={item.overview} type="mediumCaption14" numberOfLines={6} style={styles.overview} />
      </View>
    </Pressable>
  );
};

export default React.memo(MovieCardWithDescription);
