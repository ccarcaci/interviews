const extractColumn = (columnNumber: number, board: string[][]): string[] => board.map((row) => row[columnNumber])

export { extractColumn }
