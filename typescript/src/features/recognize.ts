import { RecognizedPeriodType } from '../types/RecognizedPeriodType'

const recognize = (chunk: string, dictio: string[]): RecognizedPeriodType => {
  if(chunk.length === 1) {
    return {
      recognizedPhrase: chunk,
      vacantCharsNumber: 1,
    }
  }
  if(dictio.includes(chunk)) {
    return {
      recognizedPhrase: `${chunk} `,
      vacantCharsNumber: 0,
    }
  }

  const chunkLength = chunk.length
  const chunkSplitIndexes = Array.from(Array(chunkLength).keys()).filter((index) => index > 0)
  
  const recognizingProcess: RecognizedPeriodType[] = chunkSplitIndexes.map((splitIndex) => {
    const firstChunk = chunk.slice(0, splitIndex)
    const secondChunk = chunk.slice(splitIndex, chunkLength)
    const firstRecognition = recognize(firstChunk, dictio)
    const secondRecognition = recognize(secondChunk, dictio)

    return {
      recognizedPhrase: `${firstRecognition.recognizedPhrase}${secondRecognition.recognizedPhrase}`.trim(),
      vacantCharsNumber: firstRecognition.vacantCharsNumber + secondRecognition.vacantCharsNumber,
    }
  })
  const minVacants = Math.min(...recognizingProcess.map((recognize) => recognize.vacantCharsNumber))
  const bestProcess = recognizingProcess.find((recognize) => recognize.vacantCharsNumber === minVacants)

  return bestProcess!
}

export { recognize }
