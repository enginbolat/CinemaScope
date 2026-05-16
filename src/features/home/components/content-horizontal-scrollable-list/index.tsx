import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Popular } from '@shared/models/popular';
import { MovieCard, Text } from '@shared/components/index';
import { styles } from '@features/home/screens/home-screen.style';

import { Props } from './type';

const ContentHorizontalScrollableList = ({ title, contentList, onPressItem }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Popular }) => (
      <View style={{ marginRight: 12 }}>
        <MovieCard item={item} onPress={onPressItem} />
      </View>
    ),
    [],
  );

  return (
    <>
      <View style={styles.contentTitle}>
        <Text type="mediumHeading620" text={title} />
      </View>
      <FlashList
        data={contentList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentListContainerStyle}
      />
    </>
  );
};

export default ContentHorizontalScrollableList;
