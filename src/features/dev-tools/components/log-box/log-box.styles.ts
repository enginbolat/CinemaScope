import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors.ts'
import { AppRadius, AppSpacing } from '@shared/constants/app-constants'

export const styles = StyleSheet.create({
  logBox: {
    marginBottom: AppSpacing.md,
    padding: AppSpacing.sm,
    borderRadius: AppRadius.md,
    backgroundColor: '#1e1e1e',
  },
  logBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logBoxContent: {
    flex: 1,
  },
  statusBadge: {
    width: 44,
    height: 44,
    borderRadius: AppRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statusBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
  },
  logBoxTitleRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  metaRight: {
    alignItems: 'flex-end',
    gap: 2,
  },
  date: {
    color: '#888',
    fontSize: 11,
  },
  duration: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  url: {
    color: '#ccc',
    fontSize: 12,
    marginTop: AppSpacing.unit,
  },
  data: {
    color: '#fff',
    fontSize: 12,
  },
  expandedContainer: {
    marginTop: 10,
    gap: AppSpacing.xs,
  },
  curlButton: {
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    padding: AppSpacing.xs,
    borderRadius: 6,
    marginTop: AppSpacing.unit,
    height: 30,
  },
  curlButtonText: {
    color: AppColors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
})
