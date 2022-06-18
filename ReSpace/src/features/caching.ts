import { RecognizedPeriodType } from "../types/RecognizedPeriodType"

export type CachedValueType = {
  [chunk: string]: RecognizedPeriodType,
}

const caching = () => {
  const cache: CachedValueType = {}

  return {
    set: (chunk: string, value: RecognizedPeriodType) => { cache[chunk] = value },
    get: (chunk: string) => cache[chunk],
  }
}

export { caching }
