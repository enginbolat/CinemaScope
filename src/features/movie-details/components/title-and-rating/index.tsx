import { View } from 'react-native'

import { Icon, Text } from '@shared/components/index'

import { styles } from '../../screens/style'

type Props = {
  title: string;
  voteAverage: number | undefined;
};

const TitleAndRating = ({ title, voteAverage }: Props) => (
  <View style={styles.titleAndRatingContainer}>
    <Text type="mediumHeading620" text={title} />
    <View style={styles.ratingContainer}>
      <Icon name="Star" height={styles.starIcon.height} width={styles.starIcon.width} />
      {voteAverage && <Text text={voteAverage.toString().substring(0, 3)} type="mediumCaption14" numberOfLines={2} />}
    </View>
  </View>
)

export default TitleAndRating
