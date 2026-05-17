import { DURATION_COLOR, DURATION_THRESHOLD } from './constants'

export const formatDate = (date: string) =>
  new Date(date).toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' })

export const sanitizeHeaders = (headers: Record<string, unknown>) => {
  const h = { ...headers }
  if (h.Authorization) h.Authorization = '***'
  return h
}

export const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

export const formatDuration = (ms?: number) => {
  if (ms == null) return null
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

export const getDurationColor = (ms?: number): string => {
  if (ms == null) return '#888'
  if (ms <= DURATION_THRESHOLD.FAST) return DURATION_COLOR.FAST
  if (ms <= DURATION_THRESHOLD.MEDIUM) return DURATION_COLOR.MEDIUM
  return DURATION_COLOR.SLOW
}
