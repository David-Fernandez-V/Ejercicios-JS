let mySet = new Set(["David","Fernéndez",23])
console.log(mySet)

//Métodos**

//Añadir elementos
mySet.add("1.74")
console.log(mySet)

//Eliminar elemento
if(mySet.delete(23)){
    console.log("Elemento eliminado")
}

//Buscar elemento
if(mySet.has("David")){
    console.log("Elemento encontrado")
}

console.log(mySet.size)

//Transformar set a un array
let myArray = Array.from(mySet)
myArray.push("David")
console.log(myArray)

//Transformar array a un set
mySet = new Set(myArray)
console.log(mySet)

//No se permiten repetidos en un set
mySet.add("David")
console.log(mySet)