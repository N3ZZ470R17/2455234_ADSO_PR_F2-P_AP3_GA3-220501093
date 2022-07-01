// Desarrollar una aplicación que venda tiquetes de cine, el cliente que debe estar registrado 
// deberá comprar tiquetes de una película en específico, al final deberá mostrar: 
// el número de tiquetes que ha comprado, la silla que le corresponde, la película y la función.

class Cinezzma {
    constructor() {
        this.clientes = [];
        this.pelicula = [];
        this.reservacion = [];
    }

    // idC = [ID] de [C]liente 
    registrarCliente(idC, nombre) {
        this.clientes[idC] = { idC, nombre }
    }

    // idP = [ID] de [P]elícula
    registrarPelicula(idP, titulo, categoria) {
        this.pelicula[idP] = { idP, titulo, categoria }
    }

    fndPel(idP) {
        return this.pelicula[idP];
    }

    fndClt(idC) {
        return this.clientes[idC];
    }

    reservarAsiento(idP, idC) {
        const cliente = this.fndClt(idC)
        const peli = this.fndPel(idP)

        this.reservacion[idC] = {
            cliente: cliente.nombre,
            codPel: peli.idP,


            pelNam: peli.titulo,
            fecha_reservado: new Date()
        }
    }

    fndReservas() {
        return this.reservacion
    }

}

const cinezzma = new Cinezzma()

cinezzma.registrarCliente('00001', 'Armando Torres')
cinezzma.registrarPelicula('20032', 'Interstellar', 'Sci - Fi')
cinezzma.reservarAsiento('20032', '00001')

console.log(cinezzma.fndClt())
console.log(cinezzma.fndPel())
console.log(cinezzma.fndReservas())