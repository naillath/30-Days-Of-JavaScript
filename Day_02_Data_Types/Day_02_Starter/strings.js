// Strings

// Strings são textos, podem está entre aspas simples, duplas e crases

let space = ' '
let firstName = 'Lucas'
let lastName = 'Silva'
let country = 'Brasil'
let city = 'Planaltina'
let language = 'JavaScript'
let job = 'Front-end Developer'
let quote = "The saying, 'Seeing is Believing' is not correct in 2024."
let quotWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2024.`


// Concatenação de Strings

let fullName = firstName + space + lastName
console.log(fullName)

// Pode se concatenar strings de diferentes formas

// Declarando variaveis diferentes de tipos de dados diferentes

let spaceString = ' '
let myFirstName = 'Lucas'
let myLastName = 'Silva'
let myCountry = 'Brasil'
let myCity = 'Planaltina'
let myStudyLanguage = 'JavaScript'
let myJob = 'Front-end Developer'
let myAge = 307

let myFullName = myFirstName + spaceString + myLastName
let personInfoOne = myFullName + '. I am ' + myAge + '. I live in ' + country

console.log(personInfoOne)

// Long Literal String

const paragraph = "My name is Lucas Silva. I live in Planaltina, Brazil. \
I am a student at in IT and I love technology. I study HTML, CSS, JavaScript and Python \
I started my programming studies at the end of 2022, \
but I faced demotivation at various times when I felt I wasn't making progress. \
However, I still have hopes of improving my skills. \
Now, we are in 2024. I am participating in the 30DaysOfJavaScript challenge and \
I hope to master JavaScript by the end of the process."

console.log(paragraph)

const paragrafo = "Meu nome é Lucas Silva. Eu moro em Planaltina, Brasil. \
Sou estudante de TI e adoro tecnologia. Estudo HTML, CSS, JavaScript e Python. \
Comecei meus estudos em programação no final de 2022, \
mas enfrentei desmotivação em diversos momentos, quando sentia que não estava progredindo. \
No entanto, ainda tenho esperanças de me capacitar. \
Agora, estamos em 2024. Estou participando do desafio 30 Dias de JavaScript \
e espero dominar JavaScript ao final do processo."

console.log(paragrafo)
/*

Em JavaScript e em outras linguagens de programação, a barra invertida (`\`) seguida de alguns caracteres é chamada de sequência de escape. Aqui estão os caracteres de escape mais comuns:

- \': Insere uma aspa simples dentro de uma string.
- \": Insere uma aspa dupla dentro de uma string.
- \\: Insere uma barra invertida.
- \n: Insere uma nova linha (quebra de linha).
- \r: Insere um retorno de carro.
- \t: Insere uma tabulação (espaço horizontal).
- \b: Insere uma retrocesso (backspace).
- \f: Insere uma form feed (alimentação de formulário).
- \v: Insere uma tabulação vertical.
- \0: Insere um caractere nulo.

Essas sequências de escape são úteis quando você precisa incluir caracteres especiais em strings que, de outra forma, poderiam causar erros ou não serem exibidos corretamente.

*/