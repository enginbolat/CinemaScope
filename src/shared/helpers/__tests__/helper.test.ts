import { setListForUpdateStateAndStorage } from '../helper'

describe('setListForUpdateStateAndStorage', () => {
  it('adds item when it does not exist in array', () => {
    const { array, isDataAlreadyExist } = setListForUpdateStateAndStorage('movie-1', [])
    expect(array).toContain('movie-1')
    expect(isDataAlreadyExist).toBe(false)
  })

  it('removes item when it already exists in array', () => {
    const { array, isDataAlreadyExist } = setListForUpdateStateAndStorage('movie-1', ['movie-1', 'movie-2'])
    expect(array).not.toContain('movie-1')
    expect(isDataAlreadyExist).toBe(true)
  })

  it('preserves other items when removing', () => {
    const { array } = setListForUpdateStateAndStorage('movie-1', ['movie-1', 'movie-2', 'movie-3'])
    expect(array).toEqual(['movie-2', 'movie-3'])
  })

  it('appends to the end when adding', () => {
    const { array } = setListForUpdateStateAndStorage('movie-3', ['movie-1', 'movie-2'])
    expect(array).toEqual(['movie-1', 'movie-2', 'movie-3'])
  })

  it('does not mutate the original array', () => {
    const original = ['movie-1']
    setListForUpdateStateAndStorage('movie-2', original)
    expect(original).toHaveLength(1)
  })
})
