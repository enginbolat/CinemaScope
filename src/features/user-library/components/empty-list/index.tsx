import { View } from 'react-native'

import { Text } from '@shared/components/index'

import { styles } from './styles'
import type { Props } from './type'

const EmptyList = ({ title }: Props) => (
  <View style={styles.container}>
    <Text text={`Nothing Found About ${title}`} type="boldHeading620" style={styles.text} />
  </View>
)

export default EmptyList
