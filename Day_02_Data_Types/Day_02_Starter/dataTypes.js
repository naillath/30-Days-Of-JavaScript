// Data Types| Tipos de Dados

/*
TIPO DE DADOS PRIMITIVOS
TIPO DE DADOS NÃO-PRIMITIVOS (ARRAYS E OBJETOS)
*/

/*
PRIMITIVOS

Numbers
Strings
Booleans
Null
Undefined
Symbol

NÃO PRIMITIVOS

Objetos
Arrays

*/

let word = 'JavaScript'
word[0] = 'Y'


let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)


let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)
console.log(nums.length) // mostra o numero de indices dentro de um array


// Por mais que números primitivos sejam mutaveis, não tem como comparar seus valores

// Arrays

let numbers01 = [1, 2, 3]
let numbers02 = [1, 2, 3]

console.log(numbers01 == numbers02)

// Objetos

let userOne = {
    name: 'Lucas',
    gender: 'male',
    age: 29
}

let userTwo = {
    name: 'Lucas',
    gender: 'male',
    age: 29
}

console.log(userOne == userTwo)

// Os tipos não primitivos são comparados por referência, não por valor. Dois objetos são iguais apenas se se referirem ao mesmo objeto.

let nums01 = [1, 2, 3]
let nums02 = nums01

console.log(nums01 == nums02)

let userOneB = {
    name: 'Lucas',
    gender: 'male',
    age: 29
}

let userTwoB = userOneB

console.log(userOneB == userTwoB)