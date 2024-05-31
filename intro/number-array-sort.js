const arr = [1000, 345, 678, 5, 15, 55, 345, 2115]
arr.sort(function(a, b) {
    return a - b    // b - a for desc order
})

console.log(arr)