import { View } from 'react-native'

import { Icon, Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'

import { styles } from './title-and-rating.styles'
import type { ITitleAndRatingProps } from './title-and-rating.types'

const TitleAndRating = ({ title, voteAverage, voteCount }: ITitleAndRatingProps) => (
  <View style={styles.titleAndRatingContainer}>
    <Text type="displayLg" text={title} />
    <View style={styles.ratingContainer}>
      <Icon name="Star" height={styles.starIcon.height} width={styles.starIcon.width} color={AppColors.secondary} />
      {voteAverage && <Text text={voteAverage.toString().substring(0, 3)} type="titleMd" numberOfLines={2} />}
      {!!voteCount && <Text text={`(${voteCount?.toString()})`} color={AppColors.onSurfaceVariant} />}
    </View>
  </View>
)

export default TitleAndRating
