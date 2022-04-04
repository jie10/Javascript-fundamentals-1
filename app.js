// Variables and Values
let js = 'amazing'
console.log(js)
console.log(48 + 8 + 30 - 10)

console.log('Jie')
console.log(25)

// string
let firstName = 'jie'
firstName = 'Benjie'
// number
var age = 24
age = 25
//boolean
const graduate = 'true'
// undefined
let job
// null
let address = null

console.log(`My name is ${firstName} i'm ${age} graduate ${graduate}`)

// let = can be re-assign *Block
// var = can be re-assign *Function
// const = can't be re-assign

// Identify Data Types
console.log(typeof firstName) // string
console.log(typeof age) // number
console.log(typeof graduate) // boolean
console.log(typeof job) // undefined
console.log(typeof address) // null


// Math Operators
const dateNow = 2022
const ageJie = dateNow - 1997
const ageAngel = dateNow - 1996
console.log(ageJie, ageAngel)
console.log(ageJie * 2, ageJie / 10, 2 ** 3)
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const region = 'NCR'
const country = 'Philippines'
console.log(region + ' ' + country)
// console.log(`${region} ${country}`)

// Assignment Operators
let x = 10 + 5 // 15
x += 10 // x + 10 = 25
x *= 4 // x * 4 = 100
x++ // x + 1 = 101
x-- // x - 1 = 100
console.log(x)

// Comparison Operators
console.log(ageJie > ageAngel) // false
console.log(ageJie > 25) // false
console.log(ageJie >= 25) // true
console.log(ageAngel === 26) // true
console.log(dateNow - 1997 > dateNow - 1996) // false

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
    1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
    GOOD LUCK 😀
    */

