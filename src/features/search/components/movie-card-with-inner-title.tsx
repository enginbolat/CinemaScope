import { Pressable, View } from 'react-native'

import { ImageBackground } from 'expo-image'

import { Star } from '@shared/assets/icons/star'
import { Text } from '@shared/components'
import { AppColors } from '@shared/constants/app-colors'
import { BASE_W500_URL } from '@shared/constants/app-config'
import type { Popular } from '@shared/models'

import { styles } from './movie-card-with-inner-title.styles'

type Props = {
  item: Popular
  handleItemOnPress: (item: Popular) => void
  columnIndex: number
}

const MovieCardWithInnerTitle = ({ item, handleItemOnPress, columnIndex }: Props) => (
  <Pressable
    onPress={() => handleItemOnPress(item)}
    style={[styles.gridCell, columnIndex === 0 ? styles.gridCellColFirst : styles.gridCellColRest]}>
    <ImageBackground
      source={{ uri: BASE_W500_URL + item.backdrop_path }}
      style={styles.backdropCard}
      contentFit="cover"
      cachePolicy="disk"
      priority="low">
      <View pointerEvents="none" style={styles.backdropOverlay} />
      <View style={styles.backdropContent}>
        <View style={styles.backdropFooter}>
          <Text text={item.title} type="titleMd" numberOfLines={2} />
          <View style={styles.backdropRatingRow}>
            <Star height={18} width={18} color={AppColors.secondary} />
            <Text text={item?.vote_average?.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />
          </View>
        </View>
      </View>
    </ImageBackground>
  </Pressable>
)

export default MovieCardWithInnerTitle
