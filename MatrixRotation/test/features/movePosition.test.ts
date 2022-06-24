import { movePosition } from '../../src/fetures/movePosition'

test('Top left', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(1, 1, frame)
  expect(newPosition).toEqual({
    row: 2,
    col: 1,
  })
})

test('Middle left', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(2, 1, frame)
  expect(newPosition).toEqual({
    row: 3,
    col: 1,
  })
})

test('Bottom left', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(3, 1, frame)
  expect(newPosition).toEqual({
    row: 3,
    col: 2,
  })
})

test('Middle bottom', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(3, 2, frame)
  expect(newPosition).toEqual({
    row: 3,
    col: 3,
  })
})

test('Bottom right', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(3, 4, frame)
  expect(newPosition).toEqual({
    row: 2,
    col: 4,
  })
})

test('Middle right', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(2, 4, frame)
  expect(newPosition).toEqual({
    row: 1,
    col: 4,
  })
})

test('Top right', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(1, 4, frame)
  expect(newPosition).toEqual({
    row: 1,
    col: 3,
  })
})

test('Middle top', () => {
  const frame = {
    minRow: 1,
    maxRow: 3,
    minCol: 1,
    maxCol: 4,
  }
  const newPosition = movePosition(1, 2, frame)
  expect(newPosition).toEqual({
    row: 1,
    col: 1,
  })
})
