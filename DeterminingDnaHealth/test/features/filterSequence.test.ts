import { filterSequence } from '../../src/features/filterSequence'

test('Empty DNA sequence', () => {
  const dna: string[] = []
  const dnaSequence = filterSequence(7, 9, dna)

  expect(dnaSequence).toEqual([])
})

test('Filter specific element', () => {
  const dna: string[] = ['a', 'b', 'c']
  const dnaSequence = filterSequence(1, 1, dna)

  expect(dnaSequence).toEqual(['b'])
})

test('Filter specific DNA sequence', () => {
  const dna: string[] = ['a', 'b', 'c', 'aa', 'd', 'b']
  const dnaSequence = filterSequence(1, 5, dna)

  expect(dnaSequence).toEqual(['b', 'c', 'aa', 'd', 'b'])
})

test('Boundaries are beyond DNA length', () => {
  const dna: string[] = ['a', 'b', 'c', 'aa', 'd', 'b']
  const dnaSequence = filterSequence(-1, 6, dna)

  expect(dnaSequence).toEqual(['a', 'b', 'c', 'aa', 'd', 'b'])
})
