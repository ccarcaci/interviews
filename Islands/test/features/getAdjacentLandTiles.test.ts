import { getAdjacentLandTiles } from '../../src/features/getAdjacentLandTiles'

test('Single tile', () => {
  const tiles = [[1]]
  const adjacentLandTiles = getAdjacentLandTiles(0, 0, tiles)

  expect(adjacentLandTiles).toEqual([])
})

test('2x2 tiles', () => {
  const tiles = [
    [1, 1],
    [0, 0],
  ]
  const adjacentLandTiles = getAdjacentLandTiles(0, 0, tiles)

  expect(adjacentLandTiles).toEqual([{ x: 1, y: 0 }])
})

test('3x3 tiles', () => {
  const tiles = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]
  const adjacentLandTiles = getAdjacentLandTiles(1, 1, tiles)

  expect(adjacentLandTiles).toEqual([
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ])
})
