class Animal {
    constructor(nombre,altura){
        this.nombre = nombre
        this.altura = altura
    }

    info(){
        console.log("Animal : ", this.nombre)
        console.log("Tamaño : ", this.altura, "m")
    }
}

class Perro extends Animal{
    constructor(altura) {
        super("Perro",altura)
    }
    
    ladrar(){
        console.log("*Perro Ladra*")
    }
}



myAnimal = new Animal("Gato", 0.55)
myAnimal.info()

myPerro = new Perro(1.15)
myPerro.info()
myPerro.ladrar()


//Métodos estáticos
class MathOperation{
    static suma(a,b){
        return a+b
    }
}

console.log(MathOperation.suma(20,35)) //Se pueden usar los métodos sin insatnciar un objeto de esta clase
