import { calculateHealth } from './calculateHealth'
import { filterSequence } from './filterSequence'

export type MinMaxHealthType = {
  min: number
  max: number
}

const dnaHealth = (genes: string[], healths: number[], ...strands: [number, number, string][]): MinMaxHealthType => {
  const strandsHealth = strands.map((strand) => {
    const start = strand[0]
    const end = strand[1]
    const strandSequence = strand[2]
    const dnaSequence: string[] = filterSequence(start, end, genes)
    const healthSequence: number[] = filterSequence(start, end, healths)
    const strandHealth = calculateHealth(strandSequence, dnaSequence, healthSequence)
    return strandHealth
  })
  return {
    min: Math.min(...strandsHealth),
    max: Math.max(...strandsHealth),
  }
}

export { dnaHealth }
