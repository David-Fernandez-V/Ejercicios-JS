 let edad = 22

console.log("Estructura if, else: ")
console.log("Edad a analizar: ", edad)
 if (edad>=21){
    console.log("Se cumple la mayoría de edad en USA")
 } else if(edad>=18){
    console.log("Se cumple la mayoria de edad en México")
 } else {
    console.log("No se cumple la mayoria de edad")
 }

console.log("\nEstructura switch")
let dia = 8
console.log("Dia a analizar: ", dia)
switch(dia){
    case 1:
        nombre_dia = "Lunes"
        break
    case 2:
        nombre_dia =  "Martes"
        break
    case 3:
        nombre_dia =  "Miercoles"
        break
    case 4:
        nombre_dia =  "Jueves"
        break
    case 5:
        nombre_dia =  "Viernes"
        break
    case 6:
        nombre_dia =  "Sabado"
        break
    case 7:
        nombre_dia =  "Domingo"
        break
    default:
        nombre_dia =  "El día no existe"
}

console.log("El nombre del dia es: ", nombre_dia)