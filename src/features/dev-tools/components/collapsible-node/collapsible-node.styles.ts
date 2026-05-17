import { StyleSheet } from 'react-native'

type ICollapsibleNodeStyles = {
  depth: number
}

export const useCollapsibleNodeStyles = ({ depth }: ICollapsibleNodeStyles) =>
  StyleSheet.create({
    container: {
      paddingLeft: depth * 12,
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
      marginRight: 4,
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
