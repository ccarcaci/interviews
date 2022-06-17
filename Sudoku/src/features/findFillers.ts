const findFillers = (line: string[], filteredValues: number[] = []): number[] => {
  const lineValues = filterLineValues(line)

  return filteredValues
    .filter((value) => !lineValues.includes(value))
}

//  --

const filterLineValues = (line: string[]): number[] =>
  line.map((value) => {
    const theValue = Number(value)
    if(Number.isNaN(theValue)) { return }
    return theValue  
  }).filter((value) => value) as number[]

//  --

export { findFillers }
