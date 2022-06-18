export type HumanTowerBrickType = {
  height: number
  weight: number
}

const circusTower = (bricks: HumanTowerBrickType[]): HumanTowerBrickType[] => {
  const bricksSortedByHeight = Array.from(bricks.sort((brick1, brick2) => brick1.height - brick2.height))
  const bricksSortedByWeight = Array.from(bricks.sort((brick1, brick2) => brick1.weight - brick2.weight))
  const heightTower = createTower(bricksSortedByHeight)
  const weightTower = createTower(bricksSortedByWeight)

  return heightTower.length < weightTower.length ? weightTower : heightTower
}

//  --

const createTower = (sortedBricks: HumanTowerBrickType[]): HumanTowerBrickType[] =>
  sortedBricks.reduce<HumanTowerBrickType[]>((tower, brick) => {
    if (tower.length <= 0) {
      return [brick]
    }
    const currentTop = tower[tower.length - 1]

    if (currentTop.height > brick.height) {
      return tower
    }
    if (currentTop.weight > brick.weight) {
      return tower
    }

    return [...tower, brick]
  }, [])

//  --

export { circusTower }
