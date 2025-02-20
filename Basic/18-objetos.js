let persona = {
    nombre: {
        nombre_pila: "David",
        apellido: "Fernández",

        darNombreCompleto: function(){
            return `${this.nombre_pila} ${this.apellido}` 
        }
    },
    edad: "23",

    precentarse: function(){
        console.log(`Hola, me llamo ${this.nombre.darNombreCompleto()}`)
    }
} 

persona.precentarse()

//Iterar objetos
for(key in persona){
    console.log(key, ": ", persona[key])
}

//Función constructora (Esto se deberia hacer con clases)

function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

let persona2 = new Persona("Guadalupe",24)

console.log(persona2)