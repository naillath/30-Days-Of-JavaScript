// Numbers

let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
//const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

//console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

// Objeto Math

// Em JavaScript o "Objeto Math", providencia um monte de metodos para trabalhar ocm numeros

const PI = Math.PI

console.log(PI)

// Arrendondamento de números
// Se for menor que 0.5, arredonda pra baixo, se for maior, arrendonda pra cima

console.log(Math.round(PI)) // Arredonda para os números mais próximos
console.log(Math.round(9.81))

console.log(Math.floor(PI)) // Arredonda para baixo
console.log(Math.ceil(PI)) // Arredonda para cima

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // Retorna o menor valor
console.log(Math.max(-5, 3, 20, 4, 5 ,10)) // Retorna o maior valor

const randNum = Math.random() // Cria um número aleatório entre 0 a 0.999999

// Vamos criar um número aleatório entre 0 e 10

const numRandom = Math.floor(Math.random() * 101)
console.log(numRandom)

// Valor absoluto
console.log(Math.abs(-10))

// Raiz quadrada
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2)) // 1.4142135623730951

// Potenciação
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)