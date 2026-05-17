import { StyleSheet } from 'react-native'

import { AppSpacing } from '@shared/constants/app-constants'

type ICollapsibleNodeStyles = {
  depth: number
}

export const useCollapsibleNodeStyles = ({ depth }: ICollapsibleNodeStyles) =>
  StyleSheet.create({
    container: {
      paddingLeft: depth * AppSpacing.sm,
    },
    jRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingVertical: 2,
    },
    jChevron: {
      color: '#888',
      fontSize: 10,
      marginRight: AppSpacing.unit,
    },
    jKey: {
      color: '#61dafb',
      fontSize: 11,
    },
    jMeta: {
      color: '#888',
      fontSize: 11,
    },
  })
