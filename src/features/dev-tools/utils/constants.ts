import type { NetworkLog } from '@shared/api/base-api'

export const TYPE_COLOR: Record<NetworkLog['type'], string> = {
  request: '#61dafb',
  response: '#4caf50',
  error: '#f44336',
}

export const DURATION_THRESHOLD = {
  FAST: 30,
  MEDIUM: 50,
  SLOW: 70,
} as const

export const DURATION_COLOR = {
  FAST: '#4caf50',
  MEDIUM: '#f5c542',
  SLOW: '#f44336',
} as const
