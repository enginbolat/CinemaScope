import { formatDuration, getDurationColor, isPlainObject, sanitizeHeaders } from '../helper'

describe('sanitizeHeaders', () => {
  it('masks Authorization value', () => {
    const result = sanitizeHeaders({ Authorization: 'Bearer secret', 'Content-Type': 'application/json' })
    expect(result.Authorization).toBe('***')
    expect(result['Content-Type']).toBe('application/json')
  })

  it('does not mutate the original headers object', () => {
    const headers = { Authorization: 'Bearer secret' }
    sanitizeHeaders(headers)
    expect(headers.Authorization).toBe('Bearer secret')
  })

  it('keeps headers without Authorization untouched', () => {
    const result = sanitizeHeaders({ 'X-Request-Id': '123' })
    expect(result).toEqual({ 'X-Request-Id': '123' })
  })
})

describe('isPlainObject', () => {
  it('returns true for plain objects', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ key: 'value' })).toBe(true)
  })

  it('returns false for arrays', () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject([1, 2, 3])).toBe(false)
  })

  it('returns false for null', () => {
    expect(isPlainObject(null)).toBe(false)
  })

  it('returns false for primitives', () => {
    expect(isPlainObject('string')).toBe(false)
    expect(isPlainObject(42)).toBe(false)
    expect(isPlainObject(true)).toBe(false)
  })
})

describe('formatDuration', () => {
  it('returns null for undefined', () => {
    expect(formatDuration(undefined)).toBeNull()
  })

  it('formats values under 1000ms with ms suffix', () => {
    expect(formatDuration(0)).toBe('0ms')
    expect(formatDuration(423)).toBe('423ms')
    expect(formatDuration(999)).toBe('999ms')
  })

  it('formats values 1000ms and above as seconds', () => {
    expect(formatDuration(1000)).toBe('1.0s')
    expect(formatDuration(1500)).toBe('1.5s')
    expect(formatDuration(2340)).toBe('2.3s')
  })
})

describe('getDurationColor', () => {
  it('returns gray for undefined', () => {
    expect(getDurationColor(undefined)).toBe('#888')
  })

  it('returns green for fast requests (<=30ms)', () => {
    expect(getDurationColor(0)).toBe('#4caf50')
    expect(getDurationColor(15)).toBe('#4caf50')
    expect(getDurationColor(30)).toBe('#4caf50')
  })

  it('returns yellow for medium requests (31–50ms)', () => {
    expect(getDurationColor(31)).toBe('#f5c542')
    expect(getDurationColor(50)).toBe('#f5c542')
  })

  it('returns red for slow requests (>50ms)', () => {
    expect(getDurationColor(51)).toBe('#f44336')
    expect(getDurationColor(500)).toBe('#f44336')
    expect(getDurationColor(2000)).toBe('#f44336')
  })
})
