class Persona{
    #nombre
    #id

    constructor(nombre="No definido", edad="No definido", estatura="No definido", id=123456){
        this.#nombre = nombre //atributo privado
        this.edad = edad
        this.estatura = estatura
        this.#id = id //atributo privado
    }

    get nombre(){ //Poder leer un atributo privado
        return this.#nombre
    }

    set id(id){ //Poder cambiar un atributo privado
        this.#id = id
    }

    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    mostrarId(){
        return this.#id
    }
}

let persona1 = new Persona("David", 23, 1.74)

console.log(persona1.id)
console.log(persona1.nombre)

persona1.id = 45678
persona1.nombre = "Guadalupe"
console.log(persona1.id)
console.log(persona1.nombre)

persona1.presentarse
console.log(persona1.mostrarId())