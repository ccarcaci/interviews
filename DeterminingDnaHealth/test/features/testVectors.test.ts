import { dnaHealth } from '../../src/features/dnaHealth'

describe('Test vectors reported in problem abstract', () => {
  test('Case 1', () => {
    const minMaxHealth = dnaHealth(
      ['a', 'b', 'c', 'aa', 'd', 'b'],
      [1, 2, 3, 4, 5, 6],
      [1, 5, 'caaab'],
      [0, 4, 'xyz'],
      [2, 4, 'bcdybc']
    )
    expect(minMaxHealth).toEqual({
      min: 0,
      max: 19,
    })
  })

  test('Case 2', () => {
    const minMaxHealth = dnaHealth(
      ['a', 'b', 'aaa', 'abd'],
      [1, 2, 3, 4],
      [0, 3, 'abdaaaaa'], // 6 + 2 + 9 + 4
      [0, 3, 'xyz']
    )
    expect(minMaxHealth).toEqual({
      min: 0,
      max: 21,
    })
  })
})
