import React, { memo } from 'react'

import type { StyleProp, ImageStyle } from 'react-native'
import { Pressable, StyleSheet, View  } from 'react-native'

import { Image } from 'expo-image'

import { Star } from '@shared/assets/icons/star'
import Text from '@shared/components/text'
import { BASE_W500_URL } from '@shared/constants/app-config'
import { scale } from '@shared/helpers/helper'

import { styles } from './style'
import type { IMovileCardProps } from './type'

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
      <Text text={item.title} type="mediumCaption14" numberOfLines={1} style={styles.title} />
      <View style={styles.textContainer}>
        <Star height={scale(18)} width={scale(18)} />
        <Text text={item?.vote_average?.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />
      </View>
    </Pressable>
  )
}

export default memo(MovieCard)
