const printOut = (matrix: string[][]): void => {
  const rows = matrix.length

  for(let row = 0; row < rows; row++) {
    console.log(`${[...matrix[row]]} `)
  }
  console.log('')
}

export { printOut }
