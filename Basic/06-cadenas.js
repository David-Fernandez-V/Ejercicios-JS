//Concatenar
let nombre = "David"
let saludo = "Bienvenido " + nombre + "!"

//Longitud
let longitud = saludo.length

console.log(saludo)
console.log(longitud)

//Métodos de una cadena
console.log("Accediendo a la primera letra del mensaje: ",saludo[0])
console.log("Mostrando en mayusculas: ", saludo.toUpperCase())
console.log("Buscando índice del nombre (David): David se emepieza en la posición ", saludo.indexOf("David")+1)
console.log("Buscando elemento'!': ", saludo.includes("!") ? "Encontrado" : "No encontrado")

//Template literals (Estas se usan con el acento invertido ``)
console.log("\nOtras formas de escribir cadenas")
let saludo2 = `Bienvenido ${nombre}!`
console.log(saludo2)
console.log(`       Escribiendo
            texto con saltos
            de linea`)
