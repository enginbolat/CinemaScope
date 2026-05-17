import { View, ScrollView, Text as RNText } from 'react-native'

import { styles } from './section.styles'
import type { SectionProps } from './section.types'
import JsonViewer from '../json-viewer/json-viewer'

const Section = ({ title, data }: SectionProps) => (
  <View style={styles.section}>
    <RNText style={styles.sectionTitle}>{title}</RNText>
    <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <JsonViewer data={data} />
    </ScrollView>
  </View>
)

export default Section
