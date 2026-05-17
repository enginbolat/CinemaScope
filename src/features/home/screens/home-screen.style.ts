import { StyleSheet } from 'react-native'

import type { EdgeInsets } from 'react-native-safe-area-context'

import { AppColors } from '@shared/constants/app-colors'
import { AppSpacing } from '@shared/constants/app-constants'

export const useHomeScreenStyles = ({ insets }: { insets: EdgeInsets }) =>
  StyleSheet.create({
    container: {
      backgroundColor: AppColors.surface,
      paddingBottom: insets.bottom,
    },
    contentContainer: {
      backgroundColor: AppColors.surface,
    },
    itemContainer: {
      marginBottom: AppSpacing.xl,
    },
    header: {
      marginBottom: AppSpacing.xl,
    },
  })
