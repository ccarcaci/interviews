import { fillSpot } from "./fillSpot"

const sudoku = (board: string[][], row: number = 0, col: number = 0): string[][] | undefined => {
  if(row >= 8 && col >= 8) { return board }
  if(board[row][col] !== '.') {
    const incCol = nextCol(col)
    const incRow = nextRow(row, col)
    return sudoku(board, incRow, incCol)
  }

  const fillers = fillSpot(row, col, board)
  if(fillers.length <= 0) { return }

  const boardPermutations = fillers.map((filler) => {
    const newBoard = board.map((row) => [...row])
    newBoard[row][col] = `${filler}`
    return newBoard
  })
  const boardSolutions = boardPermutations.map((board) => {
    const incCol = nextCol(col)
    const incRow = nextRow(row, col)
    return sudoku(board, incRow, incCol)
  }).filter((solution) => solution)

  return boardSolutions[0]
}

//  --

const nextCol = (col: number): number => col >= 8 ? 0 : col + 1
const nextRow = (row: number, col: number) => col >= 8 ? row + 1 : row

//  --

export { sudoku }
