let myObjet 

//try-catch
try{
    console.log(myObjet.info())
} catch {
    console.log("Error: No se encuentra el método del objeto")
}

//Bloque finally
try{
    console.log(myObjet.info())
} catch (error){
    console.log("Error: ", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

//Lanzar error
function suma(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        //throw new Error("Los parpametros no son números") //Error genérico
        throw new TypeError("Los parpametros no son números")
    }

    return (a+b)
}

try{
    console.log(suma("30",5))
} catch (error) {
    if(error instanceof TypeError){
        console.log("Error de tipo: ",error.message)
    } else if(error instanceof Error){
        console.log("Error: ")
    }
}

//Crear error personalizado
class MyCustomError extends Error{ //herencia del error genérico
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }

    printTypes(){
        console.log("Type of a: ",typeof this.a)
        console.log("Type of b: ",typeof this.b)
    }
}

function suma2(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new MyCustomError("Los parpametros no son números",a,b)
    }

    return (a+b)
}

try{
    console.log(suma2("30",5))
} catch (error) {
    if(error instanceof MyCustomError){
        error.printTypes()
    }
}

console.log("El programa continua")

