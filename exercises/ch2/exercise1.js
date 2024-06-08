const numbers = [1, 2, 3, 4, 5]

const numbersDoubled = numbers.map(value => value * 2)
console.log(numbersDoubled)

const numbersFiltered = numbers.filter(value => value % 2 === 0)
console.log(numbersFiltered)

const ifPositiveExists = numbers.some(value => value % 2 ===0)
console.log(ifPositiveExists)

const isAllPositives = numbers.every(value => value % 2 ===0)
console.log(isAllPositives)