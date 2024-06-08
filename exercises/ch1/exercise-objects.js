function filterKeys(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => keys.includes(key)))
}

const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const keys = ['b', 'd']
const filteredObj = filterKeys(obj1, keys)
console.log(filteredObj)

function mapObject(obj, mapping) {
    const mappedObj = {}
    for (const [key, value] of Object.entries(obj)) {
        mappedObj[key] = mapping(value)
    }
    return mappedObj
}

function mappingDouble(value) {
    return value * 2
}

const originalObject1 = {a: 1, b: 2, c: 3}
const mappedObject = mapObject(originalObject1, mappingDouble);

console.log(mappedObject);

function transformObject(obj, callback) {
    const transformObject = {}
    for (const [key, value] of Object.entries(obj)) {
        const transformKey = callback(key)
        transformObject[transformKey] = value
    }
    return transformObject
}

function upperCase(key) {
    return key.toUpperCase()
}

const originalObject2 = {name: "Dimitris", age: 27, city: "Athens"}
const transformedObject = transformObject(originalObject2, upperCase);

console.log(transformedObject);