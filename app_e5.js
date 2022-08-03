/**
 * Juego de ahorcado
 */
class Ahorcado {
    // Constructor
    constructor() {
        //Reglas que va a tener
        this.errors = 0;
        this.jugadores = [];
        this.bandera = false;

        this.palabras = ["complejo", "murcielago", "alcance", "ornitorrinco", "programacion"];
        this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)]
            // Para comprobar que palabra se ha usado
            // console.log(this.palabra);
        this.miPalabra = this.palabra.replace(/./g, "_ ")
    }
    iniciar() {
        let num = 1;

        do {
            this.jugadores.push(prompt(`Ingrese Jugador ${num}`));
            this.bandera = prompt(`Desea agregar mas jugadores?: `) == 'si' ? true : false;
            num++;
        } while (this.bandera)

        if (this.jugadores.length) {
            this.bandera = false;
            console.log("***********************");
            console.log("COMENCEMOS EL JUEGO");
            console.log("Encuentra la palabra escondida, tienes 3 intentos");

            console.log(this.miPalabra);
        }

        // A partir de la linea 30 (en replit)
        let intentos = 3;
        while (intentos > 0) {

        }
    }


    //Metodos??!
    intentos() {

    }
}

const game = new Ahorcado()

game.iniciar()