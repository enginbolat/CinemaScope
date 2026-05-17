import { View } from 'react-native'

import { BlurView } from 'expo-blur'

import { Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import type { Genre } from '@shared/models/genre'

import { styles } from './genre-and-release-date.styles'

type Props = {
  genres: Genre[] | undefined
}

const GenreAndReleaseDate = ({ genres }: Props) => (
  <View style={styles.genreContainer}>
    {genres?.map(genre => (
      <BlurView style={styles.chip} tint="systemChromeMaterialDark" intensity={30}>
        <Text key={genre.id} text={genre.name} color={AppColors.onSurfaceVariant} type="labelCaps" />
      </BlurView>
    ))}
  </View>
)

export default GenreAndReleaseDate
