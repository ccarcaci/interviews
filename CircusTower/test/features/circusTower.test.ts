import { circusTower } from '../../src/features/circusTower'

test('No person tower', () => {
  const tower = circusTower([])
  expect(tower).toEqual([])
})

test('One person tower', () => {
  const pairs = [{ height: 50, weight: 100 }]
  const tower = circusTower(pairs)

  expect(tower).toEqual([{ height: 50, weight: 100 }])
})

test('Three people tower', () => {
  const pairs = [
    { height: 50, weight: 100 },
    { height: 75, weight: 150 },
    { height: 60, weight: 90 },
    { height: 65, weight: 95 },
  ]
  const tower = circusTower(pairs)

  expect(tower).toEqual([
    { height: 60, weight: 90 },
    { height: 65, weight: 95 },
    { height: 75, weight: 150 },
  ])
})

test('Book example', () => {
  const pairs = [
    { height: 65, weight: 100 },
    { height: 70, weight: 150 },
    { height: 56, weight: 90 },
    { height: 75, weight: 190 },
    { height: 60, weight: 95 },
    { height: 68, weight: 110 },
  ]
  const tower = circusTower(pairs)

  expect(tower).toEqual([
    { height: 56, weight: 90 },
    { height: 60, weight: 95 },
    { height: 65, weight: 100 },
    { height: 68, weight: 110 },
    { height: 70, weight: 150 },
    { height: 75, weight: 190 },
  ])
})
