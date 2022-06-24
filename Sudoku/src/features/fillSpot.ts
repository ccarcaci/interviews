import { extractColumn } from './extractColumn'
import { extractRow } from './extractRow'
import { extractSquare } from './extractSquare'
import { findFillers } from './findFillers'

const fillSpot = (row: number, col: number, board: string[][]): number[] => {
  const theRow = extractRow(row, board)
  const rowFillers = findFillers(theRow, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  const theCol = extractColumn(col, board)
  const colFillers = findFillers(theCol, rowFillers)
  const theSquare = extractSquare(row, col, board)
  const squareFillers = findFillers(theSquare, colFillers)

  return squareFillers
}

export { fillSpot }
