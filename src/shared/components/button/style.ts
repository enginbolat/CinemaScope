import { Platform, StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors'

export const rawStyle = (disabled?: boolean) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 32,
      paddingVertical: 16,
      backgroundColor: disabled ? AppColors.secondaryGhost : AppColors.primaryContainer,
      width: '100%',
      alignItems: 'center',
      borderRadius: 999,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      ...Platform.select({
        ios: {
          shadowColor: '#e50914',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    text: {
      color: disabled ? AppColors.onSecondary : AppColors.onPrimaryContainer,
      textTransform: 'uppercase',
      letterSpacing: 1.25,
    },
  })
