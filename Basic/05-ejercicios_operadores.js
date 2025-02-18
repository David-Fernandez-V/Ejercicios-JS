// 1. Crea una variable para cada operación aritmética
let varSuma = 10+5
let varResta = 10-5
let varMultiplicación = 10*5
let varDivision = 10/5
let varModulo = 10%5
let varPotencia = 10**5

console.log("Operaciones 10 y 5")
console.log("Suma: ",varSuma)
console.log("Resta: ",varResta)
console.log("Multiplicación: ",varMultiplicación)
console.log("División: ",varDivision)
console.log("Módulo: ",varModulo)
console.log("Potencia: ",varPotencia)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
varSuma += 5
varResta -= 5
varMultiplicación *= 5 
varDivision /= 5
varModulo %= 5
varPotencia **= 5 

console.log("\n Operaciones de asignación (5)")
console.log("Suma: ",varSuma)
console.log("Resta: ",varResta)
console.log("Multiplicación: ",varMultiplicación)
console.log("División: ",varDivision)
console.log("Módulo: ",varModulo)
console.log("Potencia: ",varPotencia)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("\n Operaciones de comparación Verdaderos")
console.log("10 > 5: ", 10>5)
console.log("7 < 20: ", 7<20)
console.log("35 >= 35", 35>=35)
console.log("20 != (20+5)", 20 != (20-5))
console.log("35 == (30+5)", 35 == (30+5))

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\n Operaciones de comparación Falsos")
console.log("90 > 100: ", 90>100)
console.log("50 < 25: ", 50 < 25)
console.log("40 >= 41", 40 >= 41)
console.log("70 != (75-5)", 70 != (75-5))
console.log("80 == (40+41)", 80 == (40+41))

// 5. Utiliza el operador lógico ands
console.log("\n Operador AND")
console.log("20>15 && 2>=2: ", 20>15 && 2>=2)

// 6. Utiliza el operador lógico or
console.log("\n Operador OR")
console.log("0 || 30>20: ", 0 || 30>20)

// 7. Combina ambos operadores lógicos
console.log("\n Operadores AND y OR")
console.log("(5>7||9<15) && (10>=9||6<=25): ", (5>7||9<15) && (10>=9||6<=25))

// 8. Añade alguna negación
console.log("\n Añadiendo una negación")
console.log("5>7||!(9<15) && 10>=9||6<=25: ", (5>7||!(9<15)) && (10>=9||6<=25))

// 9. Utiliza el operador ternario
console.log("\n Operación ternaria")
10>5 ? console.log("Comparación verdadera") : console.log("Comparación falsa")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("\n Combinación de operadores")
console.log("((10+5)>=15) && (90/10 < 100/5) : ",((10+5)>=15) && (90/10 < 100/5))