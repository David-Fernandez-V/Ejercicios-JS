//Función
function darBienvenida(name){
    console.log(`Bienvenid@ ${name}!`)
}

darBienvenida("David")

//Función de tipo flcha
const darBienvenida2 = (name) => {
    console.log(`Bienvenid@ ${name}!`)
}

darBienvenida2("David")

function sumar(a=0, b=0){
    return a+b
}

console.log(sumar(10,b=15))

//funciones anidadas

function extern(){
    function intern(){
        console.log("Imprimiendo desde función interna")
    }
    console.log("Imprimiendo desde función externa")
    intern()
}

extern()

//funciones de orden superior
let nombre="David"

function applyFunc(funcion, parametro){
    funcion(parametro)
}

applyFunc(darBienvenida,nombre)

//for each

myArray = [5,10,15,20,25,30,35,40,45,50]

myArray.forEach(function(value){
    console.log(value)
})

//con función de tipo flecha
myArray.forEach((value) => console.log(value))
