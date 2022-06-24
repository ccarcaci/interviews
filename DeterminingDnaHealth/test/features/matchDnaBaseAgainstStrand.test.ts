import { matchDnaBaseAgainstStrand } from "../../src/features/matchDnaBaseAgainstStrand"

test('No match', () => {
  const totalHealth = matchDnaBaseAgainstStrand(1, 'a', 'b')
  expect(totalHealth).toBe(0)
})

test('Perfect match', () => {
  const totalHealth = matchDnaBaseAgainstStrand(1, 'a', 'a')
  expect(totalHealth).toBe(1)
})

test('Match twice', () => {
  const totalHealth = matchDnaBaseAgainstStrand(2, 'aa', 'aaa')
  expect(totalHealth).toBe(4)
})

test('Multiple match of complex strand', () => {
  const totalHealth = matchDnaBaseAgainstStrand(3, 'abc', 'abcabc')
  expect(totalHealth).toBe(6)
})
