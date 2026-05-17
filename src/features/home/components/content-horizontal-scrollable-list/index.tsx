import { useCallback } from 'react'

import { Pressable, View } from 'react-native'

import { useTranslation } from 'react-i18next'

import { FlashList } from '@shopify/flash-list'

import { MovieCard, Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import type { Popular } from '@shared/models/popular'

import { styles } from './content-horizontal-scrollable-list.styles'
import type { Props } from './types'

const ContentHorizontalScrollableList = ({ title, contentList, onSeeAll }: Props) => {
  const { t } = useTranslation()
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
          <Text type="bodySm" text={t('app.home.seeAll')} color={AppColors.errorSoft} />
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
