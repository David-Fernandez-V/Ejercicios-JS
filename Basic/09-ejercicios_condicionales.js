// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "David"
if (nombre = "David"){
    console.log("Bienvenido: ",nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "usuario_123"
let contraseña = "contraseña_123"

if(usuario == "usuario_123" && contraseña == "contraseña_123"){
    console.log("Sesión iniciada")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 0

if(num > 0){
    console.log("El número es positivo")
} else if(num < 0){
    console.log("El número es negativo")
} else{
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15

console.log("Edad: ",edad)
if(edad<18){
    console.log("Aún no puede votar. Años restantes: ", 18-edad)
} else {
    console.log("Ya puede votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let esMayor = undefined
edad>=18 ? esMayor = true : esMayor = false
//let esMayor = edad >= 18
console.log(esMayor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 3

if(mes >= 3 && mes < 6){
    console.log("Primavera")
} else if(mes >= 6 && mes < 9){
    console.log("Verano")
} else if(mes >= 9 && mes < 12){
    console.log("Otoño")
} else if(mes == 12 || (mes >= 1 && mes < 3)){
    console.log("Invierno")
} else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let numeroDias = 0
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes ==  8 || mes == 10 || mes == 12){
    numeroDias = 31
} else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
    numeroDias = 30
} else if(mes == 2){
    numeroDias = 28
}

console.log("El mes tiene: ", numeroDias, " dias")

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Español"

switch(idioma){
    case "Español":
        console.log("Bienvenido")
        break
    case "Ingles":
        console.log("Welcome")
        break
    case "Frances":
        console.log("Accueillir")
        break
    default:
        console.log("Idioma no detectado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case 1:
        console.log("Invierno")
        break
    case 2:
        console.log("Invierno")
        break
    case 3:
        console.log("Primavera")
        break
    case 4:
        console.log("Primavera")
        break
    case 5:
        console.log("Primavera")
        break
    case 6:
        console.log("Verano")
        break
    case 7:
        console.log("Verano")
        break
    case 8:
        console.log("Verano")
        break
    case 9:
        console.log("Otoño")
        break
    case 10:
        console.log("Otoño")
        break
    case 11:
        console.log("Otoño")
        break
    case 12:
        console.log("Invierno")
        break 
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case 1:
        numeroDias = 31
        break
    case 2:
        numeroDias = 28
        break
    case 3:
        numeroDias = 31
        break
    case 4:
        numeroDias = 30
        break
    case 5:
        numeroDias = 31
        break
    case 6:
        numeroDias = 30
        break
    case 7:
        numeroDias = 31
        break
    case 8:
        numeroDias = 31
        break
    case 9:
        numeroDias = 30
        break
    case 10:
        numeroDias = 31
        break
    case 11:
        numeroDias = 30
        break
    case 12:
        numeroDias = 31
        break 
}

console.log("El mes tiene: ", numeroDias, " dias")