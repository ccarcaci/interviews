import { recognize } from '../../src/features/recognize'
import { RecognizedPeriodType } from '../../src/types/RecognizedPeriodType'

test('Minimal case', () => {
  const dictio = ['ab', 'cd']
  const period: RecognizedPeriodType = recognize('abcd', dictio)

  expect(period).toEqual({
    recognizedPhrase: 'ab cd',
    vacantCharsNumber: 0,
  })
})

test('Simple recognize case', () => {
  const dictio = ['something', 'beautiful', 'happened']
  const period: RecognizedPeriodType = recognize('somethingbeautiful', dictio)

  expect(period).toEqual({
    recognizedPhrase: 'something beautiful',
    vacantCharsNumber: 0,
  })
})
