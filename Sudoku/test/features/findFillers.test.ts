import { findFillers } from '../../src/features/findFillers'

describe('Given a line, returns possible spot fillers for first available spot', () => {
  test('Row empty', () => {
    const emptyLine = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    const fillers = findFillers(emptyLine, [1, 2, 3, 4, 5, 6, 7, 8, 9])

    expect(fillers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  test('Row empty, no values available', () => {
    const emptyLine = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    const fillers = findFillers(emptyLine)

    expect(fillers).toEqual([])
  })
  test('Filter values', () => {
    const line = ['.', '.', '1', '.', '2', '3', '.', '.', '.']
    const fillers = findFillers(line, [1, 2, 5, 6, 7])

    expect(fillers).toEqual([5, 6, 7])
  })
})
