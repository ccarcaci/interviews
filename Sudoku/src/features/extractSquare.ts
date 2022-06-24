const extractSquare = (row: number, col: number, board: string[][]): string[] => {
  const rowBoundary = getLow(row)
  const colBoundary = getLow(col)
  const indexes = [ 0, 1, 2 ]
  const rowIndexes = indexes.map((index) => index + rowBoundary)
  const colIndexes = indexes.map((index) => index + colBoundary)
  const squareRows = rowIndexes.map((rowIndex) => board[rowIndex])
  const line = squareRows.flatMap((row) =>
    row.map((value, index) => {
      if(!colIndexes.includes(index)) { return }
      return value
    }).filter((value) => value) as string[]
  )

  return line
}

//  --

const getLow = (index: number): number => {
  const rangeIndex = Math.trunc(index / 3)
  const lowBoundary = rangeIndex * 3
  return lowBoundary
}

//  --

export { extractSquare }
