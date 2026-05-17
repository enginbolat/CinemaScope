import { useState } from 'react'

import { View, Pressable, Text as RNText } from 'react-native'

import { isPlainObject } from '@reduxjs/toolkit'

import { useCollapsibleNodeStyles } from './collapsible-node.styles'
import type { ICollapsibleNodeProps } from './collapsible-node.types'
import ValueChip from '../value-chip/value-chip'

const CollapsibleNode = ({ label, data, depth }: ICollapsibleNodeProps) => {
  const [open, setOpen] = useState(false)
  const styles = useCollapsibleNodeStyles({ depth })

  const isArr = Array.isArray(data)
  const summary = isArr ? `[${(data as unknown[]).length}]` : `{${Object.keys(data as object).length}}`

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(v => !v)} style={styles.jRow}>
        <RNText style={styles.jChevron}>{open ? '▼' : '▶'}</RNText>
        <RNText style={styles.jKey}>{label}</RNText>
        {!open && <RNText style={styles.jMeta}> {summary}</RNText>}
      </Pressable>
      {open &&
        (isArr
          ? (data as unknown[]).map((item, i) =>
              isPlainObject(item) || Array.isArray(item) ? (
                <CollapsibleNode key={i} label={`[${i}]`} data={item} depth={depth + 1} />
              ) : (
                <View key={i} style={[styles.jRow, { paddingLeft: (depth + 1) * 12 }]}>
                  <RNText style={styles.jMeta}>[{i}] </RNText>
                  <ValueChip value={item} />
                </View>
              ),
            )
          : Object.entries(data as Record<string, unknown>).map(([k, v]) =>
              isPlainObject(v) || Array.isArray(v) ? (
                <CollapsibleNode key={k} label={k} data={v} depth={depth + 1} />
              ) : (
                <View key={k} style={[styles.jRow, { paddingLeft: (depth + 1) * 12 }]}>
                  <RNText style={styles.jKey}>{k}: </RNText>
                  <ValueChip value={v} />
                </View>
              ),
            ))}
    </View>
  )
}

export default CollapsibleNode
