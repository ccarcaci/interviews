export type TilesCoordType = {
  x: number,
  y: number,
}

const getAdjacentLandTiles = (xIndex: number, yIndex: number, tiles: number[][]): TilesCoordType[] => {
  const xMin = Math.max(xIndex - 1, 0)
  const xMax = Math.min(xIndex + 2, tiles[yIndex].length)
  const yMin = Math.max(yIndex - 1, 0)
  const yMax = Math.min(yIndex + 2, tiles.length)

  const yRange = [...Array.from(Array(yMax - yMin).keys()).map((index) => index + yMin)]
  const xRange = [...Array.from(Array(xMax - xMin).keys()).map((index) => index + xMin)]

  const adjacentLandTiles: TilesCoordType[] = yRange.flatMap((yScan) =>
    xRange.map((xScan) => {
      if(tiles[yScan][xScan] === 0 ||
        (xScan === xIndex && yScan === yIndex) ||
        (xScan !== xIndex && yScan !== yIndex)) {
        return
      }
      return { x: xScan, y: yScan }
    }).filter((coord) => coord) as TilesCoordType[])

  return adjacentLandTiles
}

export { getAdjacentLandTiles }
