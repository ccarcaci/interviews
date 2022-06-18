// You receive a map which is a list of lists of integers. All integers are 0 or 1. Tiles with a 0 show that this
// tile represents water, tiles with 1 represent land. Consecutive blocks of land are called islands. For every
// land tile you have a "black box" function that returns all neighboring tiles that are also land. We want to
// count how many islands are there.

import { getVisitedTilesRepo } from './getVisitedTilesRepo'
import { scanIsland } from './scanIsland'

const islandsCounter = (tiles: number[][]): number => {
  const ySize = tiles.length

  if (ySize === 0) {
    return 0
  }

  const xSize = tiles[0].length
  const yRange = Array.from(Array(ySize).keys())
  const xRange = Array.from(Array(xSize).keys())
  const visitedTilesRepo = getVisitedTilesRepo()
  const islands = yRange.reduce(
    (islandsCount, yIndex) =>
      islandsCount +
      xRange.reduce((islandsCount, xIndex) => {
        if (tiles[yIndex][xIndex] === 0) {
          return islandsCount
        }
        if (visitedTilesRepo.tileVisited(xIndex, yIndex)) {
          return islandsCount
        }

        return islandsCount + scanIsland(xIndex, yIndex, tiles, visitedTilesRepo)
      }, 0),
    0
  )

  return islands
}

export { islandsCounter }
