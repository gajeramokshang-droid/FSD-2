import validator from "validator"
let name = ''
console.log(validator.isEmpty(name)) // true
name = 'helloLJU'
console.log(validator.isEmpty(name)) // false