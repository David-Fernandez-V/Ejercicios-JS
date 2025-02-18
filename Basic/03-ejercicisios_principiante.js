// 1. Escribe un comentario en una línea
//Comentario de ejemplo

// 2. Escribe un comentario en varias líneas
/* Comentario
de 
ejemplo
en 
lienas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myNumber = 3.1416
let myName = ("David")
let isBool = true
let myNull = null
let myUndefined
let mySymbol = Symbol("simbolo")
let myBigInt = BigInt(1111111111555555555333333333355555554444444477777777933333333331846)

// 4. Imprime por consola el valor de todas las variables
console.log(myNumber)
console.log(myName)
console.log(isBool)
console.log(myNull)
console.log(myUndefined)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myNumber)
console.log(typeof myName)
console.log(typeof isBool)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myNumber = 999
myName = ("Guadalupe")
isBool = false
myNull = null //
myUndefined = 
mySymbol = Symbol("Simbolo nuevo")
myBigInt = BigInt(330000000000000000000000)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myNumber = "mensaje de ejemplo"
myName = 123
isBool = 321
myNull = 864315
myUndefined = ("Valor definido")
mySymbol = null
myBigInt = ("Valor no entero")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constNumber = 3.14162
const constName = ("David2")
const constBool = true
const constNull = null
//const constUndefined
const constSymbol = Symbol("simbolo2")
const constBigInt = BigInt(22222222222222222222222)

// 9. A continuación, modifica los valores de las constantes
//constNumber = 3.14163
//constName = ("David3")
//constBool = false
//constNull = 890
//constUndefined = 789
//constSymbol = Symbol("simbolo3")
//constBigInt = BigInt(33333333333333333333333)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse