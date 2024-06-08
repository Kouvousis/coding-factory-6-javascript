const people = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}, {name: 'Charlie', age: 35}]

const peopleOver30 = people.filter(people => people.age < 30)
console.log(peopleOver30)

const peopleName = people.map(people => people.name)
console.log(peopleName)