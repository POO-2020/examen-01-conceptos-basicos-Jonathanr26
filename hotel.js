import Reservacion from "./reservacion.js";

export default class Hotel{
    /**
     * 
     * @param {string} nombre 
     * @param {Reservacion} reservaciones 
     */
    constructor(nombre, reservaciones){
        this.nombre = nombre;
        this.reservaciones = new Array();
    }
    addReservaciones(reservacion){
        this.reservaciones.push(reservacion);
    }
    listarReservaciones(){
        this.reservaciones.forEach((reservacion, i) => {
            console.log(`${i} ${reservacion.print()}`);
        });
    }
    getNumeroHuespedes(){
        let numHuespedesTotal = this.reservaciones.length;
        return (numHuespedesTotal);
    }
    getCostosReservaciones(){
        let costo = 0;
    this.reservaciones.forEach(reservacion => {
      costo += reservacion.getCostosReservaciones();
    });
    return (costo);
    }
    print(){
        this.reservaciones.forEach((reservacion, i) => {
            console.log(`${i} - ${reservacion.print()}`)
          });
    }
}