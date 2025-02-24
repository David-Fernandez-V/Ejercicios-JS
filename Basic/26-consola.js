let perro = {
    nombre: "Perro",
    raza: "Chihuahua"
}

//Mensaje de error
console.error("Error !!!")
try{
    console.log(perro.ladrar())
} catch{
    console.error(new Error("Objeto no encontrado"))
}

console.log("Código continua")

//Advertencia
console.warn("Mensaje de advertencia")

//información
console.info("Mensaje informativo")

//table
let datos = [
    {name:"David", edad:23},
    {name:"Juan", edad:22},
    {name: "Pedro", edad:20}
]
console.table(datos)

//Grupos
console.group("Usuario")
console.log("Nombre: David")
console.log("e-mail: david@correo.com")+
console.log("Edad: 28")
console.groupEnd("Usuario")

console.time("Tiempo de ejecución")

for(i=0; i<100; i++){
    for(j=0; j<100; j++){
        for(k=0; k<100; k++){
            1+1
        }
    }
}

console.timeEnd("Tiempo de ejecución")

//assert
let edad2 = 17
console.assert(edad2 >= 18, "Usuario menor de edad")

//contador
console.count("Etiqueta 1")
console.count("Etiqueta 1")
console.count("Etiqueta 1")

console.count("Etiqueta 2")
console.count("Etiqueta 2")
console.countReset("Etiqueta 2")
console.count("Etiqueta 2")

//Trace (pila de ejecución)
function funcion1(){
    console.trace("hola")
}
function funcion2(){
    funcion1()
}
function funcion3(){
    funcion2()
}

funcion3()

//Limpiar
//console.clear()

console.log("Hola de nuevo")






