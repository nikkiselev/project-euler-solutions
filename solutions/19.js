// https://projecteuler.net/problem=19

let date = new Date('1901-01-01')

let numberOfSundays = 0

while (date.getFullYear() < 2001) {
  date = new Date(
    Date.UTC(date.getFullYear(), date.getMonth() + 1, date.getDate())
  )

  if (date.getDay() === 0) {
    numberOfSundays += 1
  }
}

console.log(numberOfSundays)
