import { useCallback } from 'react'

import { Pressable, View } from 'react-native'

import { FlashList } from '@shopify/flash-list'

import { MovieCard, Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import type { Popular } from '@shared/models/popular'

import { styles } from './content-horizontal-scrollable-list.styles'
import type { Props } from './type'

const ContentHorizontalScrollableList = ({ title, contentList, onSeeAll }: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Popular }) => (
      <View style={styles.renderItemContainer}>
        <MovieCard item={item} />
      </View>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <View style={styles.ph}>
        <Text type="mediumHeading620" text={title} />
        <Pressable onPress={onSeeAll}>
          <Text type="bodySm" text="See All" color={AppColors.errorSoft} />
        </Pressable>
      </View>
      <FlashList
        data={contentList}
        renderItem={renderItem}
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ph}
      />
    </View>
  )
}

export default ContentHorizontalScrollableList
