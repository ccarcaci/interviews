import { islandsCounter } from "../../src/features/islandsCounter"

test('Single tile', () => {
  const tiles = [ [ 0 ] ]
  const islands = islandsCounter(tiles)

  expect(islands).toBe(0)
})

test('2x2 no islands', () => {
  const tiles = [
    [ 1, 0 ],
    [ 0, 1 ],
  ]
  const islands = islandsCounter(tiles)
  
  expect(islands).toBe(0)
})

test('2x2 one island', () => {
  const tiles = [
    [ 1, 1 ],
    [ 0, 0 ],
  ]
  const islands = islandsCounter(tiles)
  
  expect(islands).toBe(1)
})

test('Complex case 1', () => {
  const tiles = [
    [ 1, 0, 1, 1, 0, 0 ],
    [ 0, 0, 1, 0, 1, 0 ],
    [ 1, 1, 0, 0, 1, 0 ],
    [ 1, 1, 0, 0, 1, 0 ],
  ]
  const islands = islandsCounter(tiles)
  
  expect(islands).toBe(3)
})

test('Complex case 2', () => {
  const tiles = [
    [ 1, 1, 1, 1, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 0, 1, 1, 1 ],
    [ 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1 ],
  ]
  const islands = islandsCounter(tiles)
  
  expect(islands).toBe(1)
})
