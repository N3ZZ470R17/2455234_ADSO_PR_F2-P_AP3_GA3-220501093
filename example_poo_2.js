class Inventario {
    constructor() {
        this.libros = [];
        this.clientes = [];
        this.reservas = [];
    }

    guardar(codigo, autor, genero, titulo) {
        this.libros[codigo] = {
            codigo,
            autor,
            genero,
            titulo
        }
    }

    consultar() {
        return this.libros;
    }

    consultarCodigo(codigo) {
        return this.libros[codigo];
    }

    guardarClientes(id, nombre) {
        this.clientes[id] = { id, nombre }
    }

    consultarClienteId(id) {
        return this.clientes[id];
    }

    reservarLibro(idCliente, codigoLibro) {
        const cliente = this.consultarClienteId(idCliente)
        const libro = this.consultarCodigo(codigoLibro)

        this.reservas[idCliente] = {
            cliente: cliente.nombre,
            codLibro: libro.codigo,
            libro: libro.titulo,
            fecha_reserva: new Date()
        }
    }

    consultarReservas() {
        return this.reservas
    }

}

const inventario = new Inventario()

inventario.guardar('001', 'Gabo', 'Fantasia', '100 años de soledad')
inventario.guardar('002', 'R.R Martin', 'Fantasia', 'Fuego y Hielo')
inventario.guardarClientes(123456, "Ana Frank")
inventario.guardarClientes(987654, "Joe Doe")

inventario.reservarLibro(987654, '001')
inventario.reservarLibro(123456, '002')

inventario.consultarReservas()