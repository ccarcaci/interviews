import { printOut } from "./fetures/printOut"
import { rotate } from "./fetures/rotate"

let matrix = [
  [ 'a', 'a', 'a', 'a', 'd' ],
  [ 'b', 'e', 'e', 'h', 'd' ],
  [ 'b', 'f', 'g', 'h', 'd' ],
  [ 'b', 'c', 'c', 'c', 'c' ],
]
const rotations = 4

printOut(matrix)

for(let rot = 0; rot < rotations; rot++) {
  const newMatrix = rotate(matrix)
  printOut(newMatrix)
  matrix = newMatrix
}
