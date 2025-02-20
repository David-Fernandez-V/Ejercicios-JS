let myArray = [5,10,15,20]

//desestructuración
let [myValue0=0, myValue1=0, myValue2=0, myValue3=0, myValue4=0] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

let [fristValue, , thirthValue] = myArray
console.log(fristValue)
console.log(thirthValue)

let persona = {
    nombre: "David",
    edad: 23,
    estatura: 1.74,
    trabajo: {
        nombre: "programación",
        experiencia: "0"
    }
}

//Con objetos se debe poner exactamente el nombre del atributo que se quiere obtener
let {estatura:myEstatura, trabajo: {nombre:nombreTrabajo}, edad:myEdad, nombre:myNombre} = persona
console.log(nombreTrabajo,myNombre,myEdad,myEstatura)

//Propagación

let myArray2 = [...myArray]
let myArray3 = [...myArray, 20, 25, 30, ...myArray]
console.log(myArray2)
console.log(myArray3)

//con objetos

let persona2 = {...persona,apellido:"Fernández"}
console.log(persona2)
