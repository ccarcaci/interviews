import { detectFrame } from '../../src/fetures/detectFrame'

describe('2x2 matrix', () => {
  test('0,0', () => {
    const frame = detectFrame(0, 0, 2, 2)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 1,
    })
  })
  test('0,1', () => {
    const frame = detectFrame(0, 1, 2, 2)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 1,
    })
  })
  test('1,0', () => {
    const frame = detectFrame(1, 0, 2, 2)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 1,
    })
  })
  test('1,1', () => {
    const frame = detectFrame(1, 1, 2, 2)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 1,
    })
  })
})

describe('2x3 matrix', () => {
  test('0,0', () => {
    const frame = detectFrame(0, 0, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
  test('0,1', () => {
    const frame = detectFrame(0, 1, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
  test('0,2', () => {
    const frame = detectFrame(0, 2, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
  test('1,0', () => {
    const frame = detectFrame(1, 0, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
  test('1,1', () => {
    const frame = detectFrame(1, 1, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
  test('1,2', () => {
    const frame = detectFrame(1, 2, 2, 3)
    expect(frame).toEqual({
      minRow: 0,
      maxRow: 1,
      minCol: 0,
      maxCol: 2,
    })
  })
})

describe('3x3 matrix', () => {
  test('1,1', () => {
    const frame = detectFrame(1, 1, 3, 3)
    expect(frame).toEqual({
      minRow: 1,
      maxRow: 1,
      minCol: 1,
      maxCol: 1,
    })
  })
})

describe('4x4 matrix', () => {
  test('1,1', () => {
    const frame = detectFrame(1, 1, 4, 4)
    expect(frame).toEqual({
      minRow: 1,
      maxRow: 2,
      minCol: 1,
      maxCol: 2,
    })
  })
  test('1,2', () => {
    const frame = detectFrame(1, 1, 4, 4)
    expect(frame).toEqual({
      minRow: 1,
      maxRow: 2,
      minCol: 1,
      maxCol: 2,
    })
  })
  test('2,1', () => {
    const frame = detectFrame(2, 1, 4, 4)
    expect(frame).toEqual({
      minRow: 1,
      maxRow: 2,
      minCol: 1,
      maxCol: 2,
    })
  })
  test('2,2', () => {
    const frame = detectFrame(2, 2, 4, 4)
    expect(frame).toEqual({
      minRow: 1,
      maxRow: 2,
      minCol: 1,
      maxCol: 2,
    })
  })
})
