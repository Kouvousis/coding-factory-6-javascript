const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")
cities.forEach((element) => {
    console.log(element)
})

console.log("")

const user = {name: "Dimitris", age: 27, city: "Athens"}
console.log(user)
function hello() {
    console.log("Hello " + user.name)
}
hello()

console.log("")

function circleArea(r) {
    return Math.PI * Math.pow(r, 2)
}
console.log(circleArea(5))