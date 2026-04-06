import validator from "validator"
let email = 'test@gmail.com'
console.log(validator.isEmail(email)) // true
email = 'test@'
console.log(validator.isEmail(email)) // false

