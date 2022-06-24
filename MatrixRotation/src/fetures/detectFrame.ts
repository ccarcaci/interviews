export type FrameType = {
  minRow: number
  maxRow: number
  minCol: number
  maxCol: number
}

const detectFrame = (row: number, col: number, rows: number, cols: number): FrameType => {
  const layer = Math.min(row + 1, col + 1, rows - row, cols - col)
  return {
    minRow: layer - 1,
    maxRow: rows - layer,
    minCol: layer - 1,
    maxCol: cols - layer,
  }
}

export { detectFrame }
