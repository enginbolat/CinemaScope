import { StyleSheet } from 'react-native'

import { AppColors } from '@shared/constants/app-colors.ts'

export const styles = StyleSheet.create({
  logBox: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
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
    borderRadius: 8,
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
    marginTop: 4,
  },
  data: {
    color: '#fff',
    fontSize: 12,
  },
  expandedContainer: {
    marginTop: 10,
    gap: 8,
  },
  curlButton: {
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
    marginTop: 4,
    height: 30,
  },
  curlButtonText: {
    color: AppColors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
})
