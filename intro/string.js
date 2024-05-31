let s1 = "AUEB1"
let s2 = new String("AUEB2")
let s3 = String(3)
let s4 = 'AUEB4'
let s5 = `AUEB5`
let s6 = `This is 

an example of
a template literal, first introduced in JS
with version ES6`
let s7 = "This is\
\
an example of\
a template literal, first introduced in JS\
with version ES6"

const aueb = "AUEB"
// aueb = "AUEB other" will error

let myAueb = "Athens Uni of Econ and Bus"

let outStr = ""
for (let letter of myAueb) {
    outStr += letter
}
console.log(outStr)