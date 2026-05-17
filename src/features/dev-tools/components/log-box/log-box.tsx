import { useState } from 'react'

import { View, Pressable, TouchableOpacity, Text as RNText } from 'react-native'

import * as Clipboard from 'expo-clipboard'

import { TYPE_COLOR } from '@features/dev-tools/utils/constants'
import { formatDate, formatDuration, getDurationColor, sanitizeHeaders } from '@features/dev-tools/utils/helper'

import type { NetworkLog } from '@shared/api/base-api'
import { BASE_URL } from '@shared/constants/app-config'

import { styles } from './log-box.styles'
import Section from '../section/section'

const getStatusColor = (status?: number) => {
  if (!status) return '#555'
  if (status >= 500) return '#e05252'
  if (status >= 400) return '#e08c3a'
  if (status >= 200) return '#4caf50'
  return '#555'
}

const StatusBadge = ({ status }: { status?: number }) => (
  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(status) }]}>
    <RNText style={styles.statusBadgeText}>{status ?? '···'}</RNText>
  </View>
)

const LogEntry = ({ item }: { item: NetworkLog }) => {
  const [expanded, setExpanded] = useState(false)

  const makeCurl = async () => {
    if (!item.url || !item.method) return
    const parts = [`curl -X ${item.method} "${BASE_URL + item.url}"`]
    Object.entries(item.headers).forEach(([k, v]) => {
      if (v != null) parts.push(`-H "${k}: ${String(v)}"`)
    })
    if (item.body) parts.push(`--data-binary "${JSON.stringify(item.body).replace(/"/g, '\\"')}"`)
    console.warn('[cURL]', parts.join(' \\\n  '))
    await Clipboard.setStringAsync(parts.join(' \\\n  '))
  }

  return (
    <View style={styles.logBox}>
      <Pressable onPress={() => setExpanded(v => !v)}>
        <View style={styles.logBoxRow}>
          <StatusBadge status={item.status} />
          <View style={styles.logBoxContent}>
            <View style={styles.logBoxTitleRow}>
              <RNText style={[styles.type, { color: TYPE_COLOR[item.type] }]}>
                {item.type.toUpperCase()} {item.method ?? ''}
              </RNText>
              <View style={styles.metaRight}>
                <RNText style={styles.date}>{formatDate(item.date ?? '')}</RNText>
                {formatDuration(item.duration) != null && (
                  <RNText style={[styles.duration, { color: getDurationColor(item.duration) }]}>
                    {formatDuration(item.duration)}
                  </RNText>
                )}
              </View>
            </View>
            <RNText style={styles.url} numberOfLines={expanded ? undefined : 1}>
              {item.url}
            </RNText>
          </View>
        </View>
      </Pressable>

      {expanded && (
        <View style={styles.expandedContainer}>
          <Section title="Headers" data={sanitizeHeaders(item.headers)} />
          {item.body != null && <Section title="Body" data={item.body} />}
          {item.data != null && <Section title={item.type === 'error' ? 'Error' : 'Response'} data={item.data} />}
          <TouchableOpacity onPress={makeCurl} style={styles.curlButton}>
            <RNText style={styles.curlButtonText}>Copy cURL</RNText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default LogEntry
