const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

const userJSONString = JSON.stringify(user)
const userJSObject = JSON.parse(userJSONString)
