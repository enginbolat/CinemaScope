import React, { useCallback } from 'react'

import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'

import { styles } from '@features/home/screens/home-screen.style'

import { MovieCard, Text } from '@shared/components/index'
import type { Popular } from '@shared/models/popular'

import type { Props } from './type'

const ContentHorizontalScrollableList = ({ title, contentList, onPressItem }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Popular }) => (
      <View style={{ marginRight: 12 }}>
        <MovieCard item={item} onPress={onPressItem} />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

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
  )
}

export default ContentHorizontalScrollableList
