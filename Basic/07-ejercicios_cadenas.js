// 1. Concatena dos cadenas de texto
let cadena_1 = "Este texto "
let cadena_2 = "ha sido concatenado"

let cadena_3 = cadena_1 + cadena_2

console.log(cadena_3)

// 2. Muestra la longitud de una cadena de texto
longitud_cadena_3 = cadena_3.length
console.log("La longitud de la cadena es: ", longitud_cadena_3)

// 3. Muestra el primer y último carácter de un string
console.log("El primer carácter de la cadena es: ", cadena_3[0])
console.log("El ultimo carácter de la cadena es: ", cadena_3[longitud_cadena_3-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log("Cadena en mayúsculas: ", cadena_3.toUpperCase())
console.log("Cadena en minúscula: ", cadena_3.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`
    Esta cadena de
    Texto ha 
    Sido escrita en diferentes
    Lineas`)

// 6. Interpola el valor de una variable en un string
let texto_extra = "texto ha sido"
console.log(`Interpolando texto: Este ${texto_extra} interpolado`)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Sustituyendo los espacios por guiones: ", cadena_3.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Buscando la palabra 'texto' en la cadena: ", cadena_3.includes("texto") ? "Palabra encontrada" : "Palabra no encontrada")

// 9. Comprueba si dos strings son iguales
let cadena_4 = "Aquí otra cadena para comparar"
cadena_3.replaceAll("-"," ")
cadena_3.replaceAll("e","E")

console.log("\nComparando las dos siguientes cadenas: ")
console.log(cadena_3)
console.log(cadena_4)
console.log(cadena_3 == cadena_4 ? "Las cadenas son iguales" : "Las cadenas son diferentes")

// 10. Comprueba si dos strings tienen la misma longitud
console.log("Las longitudes de estas dos cadenas son:", cadena_3.length == cadena_4.length ? "Iguales" : "Diferentes")