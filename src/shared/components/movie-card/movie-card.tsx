import React, { memo } from 'react'

import type { StyleProp, ImageStyle } from 'react-native'
import { Pressable, StyleSheet, View } from 'react-native'

import { Image } from 'expo-image'

import { Star } from '@shared/assets/icons/star'
import Text from '@shared/components/text'
import { AppColors } from '@shared/constants/app-colors'
import { BASE_W500_URL } from '@shared/constants/app-config'
import { scale } from '@shared/helpers/helper'

import { styles } from './movie-card.styles'
import type { IMovileCardProps } from './movie-card.type'

const MovieCard = (props: IMovileCardProps) => {
  const { item, onPress, imageStyle, containerStyle } = props

  const composedImageStyle: StyleProp<ImageStyle> = StyleSheet.compose(styles.image, imageStyle)
  const composedContainerStyle = StyleSheet.compose(styles.container, containerStyle)

  return (
    <Pressable onPress={() => onPress(item)} style={composedContainerStyle}>
      <Image
        source={{ uri: BASE_W500_URL + item.poster_path }}
        style={composedImageStyle}
        priority="high"
        cachePolicy="memory-disk"
        transition={100}
      />
      <View style={styles.textContainer}>
        <Star height={scale(18)} width={scale(18)} color={AppColors.secondary} />
        <Text text={item?.vote_average?.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />
      </View>
      <Text text={item.title} type="mediumCaption14" numberOfLines={1} style={styles.title} />
    </Pressable>
  )
}

export default memo(MovieCard)
