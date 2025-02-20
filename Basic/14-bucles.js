//for
const numeros = [5,10,15,20,25,30,35,40,45,50]

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i])
}

//while, do while
counter = 0
array_length = numeros.length
while(counter < array_length){
    console.log(numeros[counter])
    counter ++
}

//for of (para estructuras de datos)

let myMap = new Map([
    ["nombre","David"],
    ["edad",27],
    ["apellido","Fernández"]
])

for (elemento of myMap){
    console.log(elemento)
}

//Continue para saltar una iteración

for (elemento of myMap){
    if(elemento[1] == "David"){
        continue
    }
    
//break para romper el bucle
    if(elemento[0] == "edad"){
        break
    }

    console.log(elemento)
}

