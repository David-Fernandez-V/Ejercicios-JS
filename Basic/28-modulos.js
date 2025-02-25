export const PI = 3.141598

export function suma(a,b){
    return a+b
}

//Exportación por defecto
export default function resta(a,b){
    return a-b
}

export class Circulo{
    constructor(radio){
        this.radio = radio
    }

    get area(){
        return Math.PI*(this.radio**2)
    }
}