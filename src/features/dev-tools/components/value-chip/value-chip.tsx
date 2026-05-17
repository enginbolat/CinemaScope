import { Text as RNText } from 'react-native'

import { styles } from './value-chip.styles'

const ValueChip = ({ value }: { value: unknown }) => {
  if (value === null) return <RNText style={styles.jNull}>null</RNText>
  if (typeof value === 'boolean') return <RNText style={styles.jBool}>{String(value)}</RNText>
  if (typeof value === 'number') return <RNText style={styles.jNum}>{value}</RNText>
  if (typeof value === 'string') return <RNText style={styles.jStr}>"{value}"</RNText>
  return null
}

export default ValueChip
