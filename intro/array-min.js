const arr = [7, 4, 9, 2, 14]

let minVal = Math.min(...arr)
let minPos = arr.indexOf(minVal)

console.log(`Min value: ${minVal}, Min Position: ${minPos}`)