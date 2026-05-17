import { BlurView } from 'expo-blur'

import { FlashList } from '@shopify/flash-list'

import { Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'
import type { Genre } from '@shared/models/genre'

import { styles } from './genre-and-release-date.styles'

type Props = {
  genres: Genre[] | undefined
}

const GenreAndReleaseDate = ({ genres }: Props) => (
  <FlashList
    bounces={false}
    showsHorizontalScrollIndicator={false}
    style={styles.genreContainer}
    contentContainerStyle={styles.contentContainer}
    horizontal
    data={genres}
    renderItem={({ item: genre }) => (
      <BlurView key={genre.id} style={styles.chip} tint="systemChromeMaterialDark" intensity={30}>
        <Text text={genre.name} color={AppColors.onSurfaceVariant} type="labelCaps" />
      </BlurView>
    )}
  />
)

export default GenreAndReleaseDate
