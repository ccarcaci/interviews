import { getAdjacentLandTiles, TilesCoordType } from './getAdjacentLandTiles'
import { VisitedTilesRepo } from './getVisitedTilesRepo'

const scanIsland = (xIndex: number, yIndex: number, tiles: number[][], visitedTilesRepo: VisitedTilesRepo): number => {
  const unvisitedTiles = getAdjacentUnvisitedTiles(xIndex, yIndex, tiles, visitedTilesRepo)
  visitedTilesRepo.visitTile(xIndex, yIndex)
  unvisitedTiles.forEach((tile) => visit(tiles, tile, visitedTilesRepo))

  if (unvisitedTiles.length <= 0) {
    return 0
  }

  return 1
}

//  --

const visit = (tiles: number[][], unvisitedTile: TilesCoordType, visitedTilesRepo: VisitedTilesRepo) => {
  const adjacentUnvisitedTiles = getAdjacentUnvisitedTiles(unvisitedTile.x, unvisitedTile.y, tiles, visitedTilesRepo)
  visitedTilesRepo.visitTile(unvisitedTile.x, unvisitedTile.y)
  adjacentUnvisitedTiles.forEach((tile) => visit(tiles, tile, visitedTilesRepo))
}

const getAdjacentUnvisitedTiles = (
  xIndex: number,
  yIndex: number,
  tiles: number[][],
  visitedTilesRepo: VisitedTilesRepo
): TilesCoordType[] => {
  const adjacentLandTiles = getAdjacentLandTiles(xIndex, yIndex, tiles)
  const unvisitedTiles = adjacentLandTiles.filter((tile) => !visitedTilesRepo.tileVisited(tile.x, tile.y))
  return unvisitedTiles
}

//  --

export { scanIsland }
