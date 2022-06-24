import { RecognizedPeriodType } from '../types/RecognizedPeriodType'
import { caching } from './caching'

const dictioRecognizer = (dictio: string[]) => {
  const cache = caching()

  const recognize = (chunk: string): RecognizedPeriodType => {
    const cachedValue = cache.get(chunk)
    if(cachedValue !== undefined) { return cachedValue }
    if(chunk.length === 1) {
      const recognizedValue = {
        recognizedPhrase: chunk,
        vacantCharsNumber: 1,
      }
      cache.set(chunk, recognizedValue)
      return recognizedValue
    }
    if(dictio.includes(chunk)) {
      const recognizedValue = {
        recognizedPhrase: ` ${chunk} `,
        vacantCharsNumber: 0,
      }
      cache.set(chunk, recognizedValue)
      return recognizedValue
    }

    const chunkLength = chunk.length
    const chunkSplitIndexes = Array.from(Array(chunkLength).keys()).filter((index) => index > 0) // 1, 2, 3, ...
    const recognizingProcess: RecognizedPeriodType[] = chunkSplitIndexes.map((splitIndex) => {
      const firstChunk = chunk.slice(0, splitIndex)
      const secondChunk = chunk.slice(splitIndex, chunkLength)
      const firstRecognition = recognize(firstChunk)
      const secondRecognition = recognize(secondChunk)

      return {
        recognizedPhrase: `${firstRecognition.recognizedPhrase}${secondRecognition.recognizedPhrase}`.replace('  ', ' '),
        vacantCharsNumber: firstRecognition.vacantCharsNumber + secondRecognition.vacantCharsNumber,
      }
    })
    const bestProcess = recognizingProcess.reduce((best, current) => {
      if(best.vacantCharsNumber > current.vacantCharsNumber) { return current }
      if(best.vacantCharsNumber === current.vacantCharsNumber && best.recognizedPhrase.length < current.recognizedPhrase.length) { return current }
      return best
    }, recognizingProcess[0])
    cache.set(chunk, bestProcess!)

    return bestProcess!
  }

  const recognizeTrim = (chunk: string): RecognizedPeriodType => {
    const recognized = recognize(chunk)

    return {
      recognizedPhrase: recognized.recognizedPhrase.trim(),
      vacantCharsNumber: recognized.vacantCharsNumber,
    }
  }

  return recognizeTrim
}

export { dictioRecognizer }
