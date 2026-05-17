import { Pressable, TouchableOpacity, View } from 'react-native'

import { ImageBackground } from 'expo-image'

import { Text, Button, Icon } from '@shared/components'
import { AppColors } from '@shared/constants/app-colors'
import { BASE_W500_URL } from '@shared/constants/app-config'

import { styles } from './banner-movie-card.styles'
import type { Props } from './banner-movie-card.types'

const BannerMovieCard = ({ movie, onPressItem }: Props) => {
  if (!movie) {
    return
  }

  const handleOnPressWatchNow = () => {}

  const handleAddFavorite = () => {}

  const posterUrl = {
    uri: BASE_W500_URL + movie.poster_path,
  }

  return (
    <Pressable onPress={() => onPressItem(movie)}>
      <ImageBackground
        source={posterUrl}
        style={styles.backgroundImage}
        contentFit="cover"
        priority="high"
        cachePolicy="memory-disk">
        <View style={styles.f1} />
        <Text text={movie.title} type="displayLg" style={styles.movieTitle} />
        <View style={styles.buttonContainer}>
          <Button text="Watch Now" onPress={handleOnPressWatchNow} style={styles.watchNowButton} />
          <TouchableOpacity style={styles.favoriteButton} onPress={handleAddFavorite}>
            <Icon name="HeartOutline" color={AppColors.white} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

export default BannerMovieCard
