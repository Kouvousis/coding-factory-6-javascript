function subArray(arr, size) {
    if (size >= arr.length) {
        return [arr]
    }

    const subArrays = []
    for (let i = 0; i < arr.length; i += size) {
        subArrays.push(arr.slice(i, i + size))
    }

    return subArrays
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sub = subArray(array, 3)
console.log(sub)

function filter(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element))
}
const array2 = [1, 5, 10]
const sameElements = filter(array, array2)
console.log(sameElements)