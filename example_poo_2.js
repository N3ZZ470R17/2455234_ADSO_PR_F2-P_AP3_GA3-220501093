class Inventario {
    constructor() {
        this.libros = [];
        this.clientes = [];
        this.reservas = [];
    }

    //Guardar libro
    guardar(codigo, autor, genero, titulo) {
        this.libros[codigo] = {
            codigo,
            autor,
            genero,
            titulo
        }
    }

    //Consultar libro
    consultar() {
        return this.libros;
    }

    //Consultar libro por codigo
    consultarCodigo(codigo) {
        return this.libros[codigo];
    }

    //Guardar cliente
    guardarClientes(id, nombre) {
        this.clientes[id] = { id, nombre }
    }

    //Consultar cliente por ID
    consultarClienteId(id) {
        return this.clientes[id];
    }

    //Reservar el libro por ID de Cliente y Código del Libro
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

    //Consultar las reservas hechas
    consultarReservas() {
        return this.reservas
    }

}

// Instancia la clase
const inventario = new Inventario()

//Guardando libro
inventario.guardar('001', 'Gabo', 'Fantasia', '100 años de soledad')
inventario.guardar('002', 'R.R Martin', 'Fantasia', 'Fuego y Hielo')

//Guardando cliente
inventario.guardarClientes(123456, "Ana Frank")
inventario.guardarClientes(987654, "Joe Doe")

//Reservando libro
inventario.reservarLibro(987654, '001')
inventario.reservarLibro(123456, '002')

//Consultando reservas
inventario.consultarReservas()