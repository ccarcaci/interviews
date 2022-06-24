const matchDnaBaseAgainstStrand = (associatedHealth: number, dnaBase: string, strandSequence: string): number => {
  let firstMatchingIndex = strandSequence.indexOf(dnaBase)
  let totalHealth = 0
  let subStrand = strandSequence

  while(firstMatchingIndex >= 0) {
    totalHealth = totalHealth + associatedHealth
    const subCutPosition = firstMatchingIndex + 1
    subStrand = subStrand.slice(subCutPosition)
    firstMatchingIndex = subStrand.indexOf(dnaBase)
  }

  return totalHealth
}

export { matchDnaBaseAgainstStrand }
