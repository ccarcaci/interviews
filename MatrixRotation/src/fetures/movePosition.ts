import { FrameType } from "./detectFrame"

export type PositionType = {
  row: number
  col: number
}

const movePosition = (row: number, col: number, frame: FrameType): PositionType => {
  if(frame.minRow <= row && row < frame.maxRow && col === frame.minCol) {
    return {
      row: row + 1,
      col,
    }
  }
  if(row === frame.maxRow && frame.minCol <= col && col < frame.maxCol) {
    return {
      row: row,
      col: col + 1,
    }
  }
  if(frame.minRow < row && row <= frame.maxRow && col === frame.maxCol) {
    return {
      row: row - 1,
      col,
    }
  }

  //if(row === frame.minRow && frame.minCol < col && col <= frame.maxCol)  
  return {
    row,
    col: col - 1
  }
}

export { movePosition }
