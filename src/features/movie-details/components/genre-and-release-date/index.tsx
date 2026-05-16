import { Text } from '@shared/components/index';
import { AppColors } from '@shared/constants/app-colors';
import { Genre } from '@shared/models/genre';
import { View } from 'react-native';

import { styles } from '../../screens/style';

type Props = {
  genres: Genre[] | undefined;
  releaseDate: string | undefined;
};

const GenreAndReleaseDate = ({ genres, releaseDate }: Props) => (
  <View style={styles.releaseDateAndGenreContainer}>
    <View style={styles.genreContainer}>
      {genres?.map(genre => (
        <Text key={genre.id} text={genre.name} color={AppColors.white50} />
      ))}
    </View>
    {releaseDate && <Text text={releaseDate} color={AppColors.white50} />}
  </View>
);

export default GenreAndReleaseDate;
