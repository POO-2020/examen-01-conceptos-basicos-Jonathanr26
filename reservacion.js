import Huesped from "./huesped.js";

export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {Date} fechaLlegada 
     * @param {number} noches 
     * @param {Huesped} huespedes 
     */
    constructor(numeroHabitacion, fechaLlegada, noches, huespedes){
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = new Date();
        this.noches = noches;
        this.huespedes = new Array();
    }
    getFechaFormatoCorto(){
        return `${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()}/${this.fechaLlegada.getFullYear()}`;
    }    
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    listarHuesped() {
        this.huespedes.forEach((huesped, i) => {
            console.log(`${i} ${huesped.getDescripcion()}`);
        });
    }
    getNumHuesped(){
        let numHuespedes = this.huespedes.length;
  
      return (numHuespedes);
    }
    print(){
        return `Habitacion ${this.numeroHabitacion},
    Fecha de Llegada ${this.getFechaFormatoCorto()},
    ${this.noches} Noches reservadas`
    }
}
/*
let reservacion1 = new Reservacion(1456,
new Date(), 
3,
new Huesped("Jonathan Rodriguez", "Masculino"))
console.log(reservacion1.print())
*/