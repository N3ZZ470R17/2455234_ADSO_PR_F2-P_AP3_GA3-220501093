class Clientes {
    constructor() {
        this.session = 12345678;
        this.clientes = [];
    }

    guardarCliente(id, nom, ape, edad, email, cel, sex) {
        try {
            this.clientes[id] = {
                id,
                nombre: nom,
                apellido: ape,
                edad,
                correo: email,
                celular: cel,
                sexo: sex
            }

            console.log("El registro fue guardado exitosamente")
        } catch (e) {
            console.log(e)
        }
    }

    consultarClientes() {
        return this.clientes
    }

    consultarCliente(id) {
        return this.clientes[id]
    }
}

const cliente = new Clientes()

cliente.guardarCliente(123456, "Ana", "Tulia", 25, "anatulia@yahoo.es", "3202445566", "F")
cliente.guardarCliente(65478, "Frank", "Lozano", 25, "franklo@yahoo.es", "3202445566", "M")
cliente.consultarClientes()