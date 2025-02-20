//Map 

let myMap = new Map([
    ["nombre","David"],
    ["edad",27],
    ["apellido","Fernández"]
])

console.log(myMap)

//Métodos

//Agregar
myMap.set("estatura",1.74)
console.log(myMap)

myMap.set("nombre","Guadalupe")
console.log(myMap)

if(myMap.has("nombre")){ //Comprobar si existe clave
    console.log(myMap.get("nombre")) //Buscar por llave
}

//Borrar por llave
if(myMap.has("estatura")){
    myMap.delete("estatura")
}

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())