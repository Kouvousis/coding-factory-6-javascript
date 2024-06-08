function unique(arr) {
    return [...new Set(arr)]
}
const arr = [1, 1, 2, 2, 3, 3, 4, 4]
const uniqueArr = unique(arr)
console.log(uniqueArr)

function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), [])
}

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flat = flattenArray(nestedArray)
console.log(flat)