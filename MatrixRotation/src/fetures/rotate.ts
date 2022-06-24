import { detectFrame } from './detectFrame'
import { movePosition } from './movePosition'

const cloneMatrix = (matrix: unknown[]) => {
  let newMatrix = [ ...Array(matrix.length)]

  for(let index = 0; index < matrix.length; index++) {
    if(Array.isArray(matrix[index])) {
      const cloned = cloneMatrix(matrix[index] as unknown[])
      newMatrix[index] = cloned
    } else {
      newMatrix[index] = Object.assign([], matrix[index])[0]
    }
  }

  return newMatrix
}

const rotate = (matrix: string[][]): string[][] => {
  let newMatrix: string[][] = cloneMatrix(matrix)
  const rows = matrix.length
  const cols = matrix[0].length

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const frame = detectFrame(row, col, rows, cols)
      const newPosition = movePosition(row, col, frame)
      newMatrix[newPosition.row][newPosition.col] = matrix[row][col]
    }
  }

  return newMatrix
}

export { rotate }
