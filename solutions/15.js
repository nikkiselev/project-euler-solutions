// https://projecteuler.net/problem=15

const grid = [
  [0, 0],
  [0, 0],
]

const pos = {
  x: 0,
  y: 1,
}

function canMoveRight(x, y) {
  return x < grid[y].length - 1
}

function canMoveDown(x, y) {
  return y < grid.length - 1
}

function canMove(x, y) {
  return canMoveRight(x, y) && !canMoveDown(x, y)
}

function moveRight(x) {
  x++
  console.log('Right')
  return x
}

function moveDown(y) {
  y++
  console.log('Down')
  return y
}

const ways = []

function waysToReachTheEnd() {
  let { x, y } = pos

  while (canMoveRight(x, y)) {
    x = moveRight(x)
  }
}

waysToReachTheEnd()

console.log(ways)
