import { act, renderHook } from '@testing-library/react-native'

import useDebounce from '../use-debounce'

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 400))
    expect(result.current).toBe('hello')
  })

  it('does not update the value before the delay has passed', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 400), {
      initialProps: { value: 'hello' },
    })

    rerender({ value: 'world' })
    act(() => jest.advanceTimersByTime(200))

    expect(result.current).toBe('hello')
  })

  it('updates the value after the delay', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 400), {
      initialProps: { value: 'hello' },
    })

    rerender({ value: 'world' })
    act(() => jest.advanceTimersByTime(400))

    expect(result.current).toBe('world')
  })

  it('resets the timer on every value change', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 400), {
      initialProps: { value: 'a' },
    })

    rerender({ value: 'ab' })
    act(() => jest.advanceTimersByTime(200))
    rerender({ value: 'abc' })
    act(() => jest.advanceTimersByTime(200))

    expect(result.current).toBe('a')

    act(() => jest.advanceTimersByTime(400))
    expect(result.current).toBe('abc')
  })
})
