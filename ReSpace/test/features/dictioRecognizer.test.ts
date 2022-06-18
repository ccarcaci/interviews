import { dictioRecognizer } from '../../src/features/dictioRecognizer'
import { RecognizedPeriodType } from '../../src/types/RecognizedPeriodType'

test('Minimal case', () => {
  const dictio = ['ab', 'cd']
  const recognize = dictioRecognizer(dictio)
  const period: RecognizedPeriodType = recognize('abcd')

  expect(period).toEqual({
    recognizedPhrase: 'ab cd',
    vacantCharsNumber: 0,
  })
})

test('Simple recognize case', () => {
  const dictio = ['something', 'beautiful', 'happened']
  const recognize = dictioRecognizer(dictio)
  const period: RecognizedPeriodType = recognize('somethingbeautiful')

  expect(period).toEqual({
    recognizedPhrase: 'something beautiful',
    vacantCharsNumber: 0,
  })
})

test('Book example', () => {
  const dictio = ['looked', 'just', 'like', 'her', 'brother']
  const recognize = dictioRecognizer(dictio)
  const period: RecognizedPeriodType = recognize('jesslookedjustliketimherbrother')

  expect(period).toEqual({
    recognizedPhrase: 'jess looked just like tim her brother',
    vacantCharsNumber: 7,
  })
})
