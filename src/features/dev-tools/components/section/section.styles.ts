import { StyleSheet } from 'react-native'

import { AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  section: {
    backgroundColor: '#111',
    borderRadius: 6,
    padding: AppSpacing.xs,
  },
  sectionTitle: {
    color: '#61dafb',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: AppSpacing.unit,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
})
