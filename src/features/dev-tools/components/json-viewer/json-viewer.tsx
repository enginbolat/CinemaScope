import { View, Text as RNText } from 'react-native'

import { isPlainObject } from '@reduxjs/toolkit'

import { styles } from './json-viewer.styles'
import CollapsibleNode from '../collapsible-node/collapsible-node'
import ValueChip from '../value-chip/value-chip'

const JsonViewer = ({ data }: { data: unknown }) => {
  if (isPlainObject(data)) {
    return (
      <>
        {Object.entries(data).map(([k, v]) =>
          isPlainObject(v) || Array.isArray(v) ? (
            <CollapsibleNode key={k} label={k} data={v} depth={0} />
          ) : (
            <View key={k} style={styles.jRow}>
              <RNText style={styles.jKey}>{k}: </RNText>
              <ValueChip value={v} />
            </View>
          ),
        )}
      </>
    )
  }
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, i) =>
          isPlainObject(item) || Array.isArray(item) ? (
            <CollapsibleNode key={i} label={`[${i}]`} data={item} depth={0} />
          ) : (
            <View key={i} style={styles.jRow}>
              <RNText style={styles.jMeta}>[{i}] </RNText>
              <ValueChip value={item} />
            </View>
          ),
        )}
      </>
    )
  }
  return <RNText style={styles.sectionContent}>{String(data)}</RNText>
}

export default JsonViewer
