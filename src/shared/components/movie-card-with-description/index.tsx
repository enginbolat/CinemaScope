import React, { memo } from 'react'

import { Pressable, View } from 'react-native'

import { Image } from 'expo-image'

import { Star } from '@shared/assets/icons/star'
import Text from '@shared/components/text'
import { BASE_W500_URL } from '@shared/constants/app-config'
import { scale } from '@shared/helpers/helper'

import { styles } from './style'
import type { Props } from './type'

const RatingRow = ({ voteAverage }: { voteAverage: number }) => (
  <View style={styles.ratingWithIconRow}>
    <Star height={scale(18)} width={scale(18)} />
    <Text text={voteAverage.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />
  </View>
)

const MovieCardWithDescription = ({ item, onPress, containerStyle }: Props) => {
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
          <RatingRow voteAverage={item.vote_average} />
        </View>
        <Text text={item.overview} type="mediumCaption14" numberOfLines={6} style={styles.overview} />
      </View>
    </Pressable>
  )
}

export default memo(MovieCardWithDescription)
