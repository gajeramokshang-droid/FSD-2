import validator from "validator"
let name = 'Jesus'
console.log(validator.isLowercase(name)) // false
name = 'HELLOLJU'
console.log(validator.isLowercase(name)) // false