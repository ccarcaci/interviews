import { matchDnaBaseAgainstStrand } from './matchDnaBaseAgainstStrand'

const calculateHealth = (strandSequence: string, dnaSequence: string[], healths: number[]): number =>
  dnaSequence.reduce<number>((sum, dna, index) => {
    const associatedHealth = healths[index]
    const totalHealthDnaBase = matchDnaBaseAgainstStrand(associatedHealth, dna, strandSequence)
    return sum + totalHealthDnaBase
  }, 0)

export { calculateHealth }
