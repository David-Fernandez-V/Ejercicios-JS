//Aritméticos
console.log("Ariméticos")

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
a++
console.log(a)
a--
console.log(a)

//Asignación
console.log("\n Asignación")
let variable = 10
console.log(variable)

variable += 5
console.log(variable)

variable -= 5
console.log(variable)

variable *= 5
console.log(variable)

variable /= 5
console.log(variable)

//Comparación
c = 10
console.log("\n Comparación")
console.log(a>b)
console.log(a>=b)
console.log(a<b)
console.log(a<=b)
console.log(a==b) 
console.log(a != b)

console.log(c=="10") //igualdad por valor
console.log(c==10)
console.log(c==="10") //igualdad por tipo de dato. Utilizar === cuando es importante comparar el valor y que sean el mismo tipo de dato

console.log(c!="10") //igualdad por valor
console.log(c!=10)
console.log(c!=="10") //igualdad por tipo de dato. Utilizar !== cuando es importante comparar el valor y que sean el mismo tipo de dato

console.log(0 == false)
console.log(5 == false)
console.log(0 == "")

//Falsy (Valores falsos)
//El número 0
//El número 0 en bigInt (0n)
//Cadens vacías
//valores null
//variables undefined
//NaN


//Lógicos
console.log("\n Operadores Lógicos")
let boolTrue = true
let boolFalse = false

console.log(boolTrue && boolFalse)
console.log(boolTrue || boolFalse)
console.log(!boolTrue)
console.log(!boolFalse)

//Operadores ternarios

const isValid = false
//Forma compacta de realizar un condicional
isValid ? console.log("Es válido") : console.log("No es válido")

