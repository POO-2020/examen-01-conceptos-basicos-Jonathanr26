import Hotel from "./hotel.js"
import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
class Main{
    constructor(){
        this.reservacion = new Reservacion(1456,
            new Date(), 
            3,
            new Huesped("Jonathan Rodriguez", "Masculino"))
        
        
        this.hote = new Hotel("Hotel California");
    }
    pruebaHuesped(){
        let x = new Huesped("Jonathan Rodrigues", "Masculino");
        console.log(x.getDescripcion());
    }
    pruebaReservacion(){
        console.log(this.reservacion.getFechaFormatoCorto());
        console.log(this.reservacion.getNumHuesped());
        console.log(this.reservacion.print())
    }
    agregarHuespe(){
        let huesped1 = new Huesped("Jonatha Rodriguez", "Masculino");
        let huesped2 = new Huesped("Kenia Villa", "Femenino");
        this.reservacion.addHuesped(huesped1);
        this.reservacion.addHuesped(huesped2);
        this.reservacion.listarHuesped();
    }
    pruebaHotel(){
        this.hote.addReservaciones(new Reservacion(1456, new Date(), 5));
        this.hote.addReservaciones(new Reservacion(1465, new Date(), 3));
        this.hote.listarReservaciones();

        let reservacion1 = new Reservacion(
            1456,
            new Date(), 
            5)
        reservacion1.addHuesped(  new Huesped("Jonatha Rodriguez", "Masculino"));
        let huesped1 = new Huesped("Kenia Villa", "Femenino");
        reservacion1.addHuesped(huesped1);
        reservacion1.addHuesped(huesped2);

        let reservacion2 = new Reservacion(
            1465,
            new Date(), 
            45)

        let huesped3 = new Huesped("Choko Mirinda", "Masculino");
        let huesped4 = new Huesped("Edson Govea", "Masculino");
        reservacion2.addHuesped(huesped3);
        reservacion2.addHuesped(huesped4);

        this.hote.addReservaciones(reservacion1);
        this.hote.addReservaciones(reservacion2);
        this.hote.listarReservaciones();
    }

}
let app = new Main();
app.pruebaHotel();