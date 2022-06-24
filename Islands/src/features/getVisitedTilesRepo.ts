import { TilesCoordType } from './getAdjacentLandTiles'

export type VisitedTilesRepo = {
  visitTile: (x: number, y: number) => void,
  tileVisited: (x: number, y: number) => boolean,
}

const getVisitedTilesRepo = () => {
  let visitedTiles: TilesCoordType[] = []

  return {
    visitTile: (x: number, y: number): void => {
      visitedTiles = [...visitedTiles, { x, y }]
    },
    tileVisited: (x: number, y: number): boolean => visitedTiles.some((tile) => tile.x === x && tile.y === y),
  }
}

export { getVisitedTilesRepo }
