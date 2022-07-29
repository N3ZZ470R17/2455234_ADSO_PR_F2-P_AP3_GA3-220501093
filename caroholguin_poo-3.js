class Clientes {
    constructor() {
        this.clientes = [];
    }

    setClientes(id, nombre, telefono, edad) {
        this.clientes[id] = { id, nombre, telefono, edad }
    }

    getClientes(id) {
        return this.clientes[id];
    }
}



class Tribuna {
    constructor() {
        this.tribunaOccidental = 0;
        this.tribunaOriental = 0;
        this.resultado = 0;
        this.operacion = '';
    }
    opera() {
        console.log(`usted ha comprado los tiquetes: ${this.operacion} para la tribuna occidental ${this.tribunaOccidental} y para la tribuna oriental ${this.tribunaOriental}`)

    }
    setTribunaOccidental(a) {
        this.tribunaOccidental = a;
    }
    setTribunaOriental(b) {
        this.tribunaOriental = b;

    }
}


class Compras {
    constructor() {
        this.clientes = new Clientes();
        this.tribuna = new Tribuna();
        this.compras = [];
    }

    guardar(codigo, tiquetes, cedula) {
        this.compras[codigo] = { codigo, tiquetes, cedula }
    }
    consultarCompra(codigo) {
        return this.compras[codigo];
    }

}

const cliente = new Clientes()
const compras = new Compras()
const tribuna = new Tribuna()



const numIntentos = prompt('ingrese cuantos tiquetes va a comprar')
for (let x = 1; x <= numIntentos; x++) {
    console.log(`este es su tiquete #${x}`)
}

tribu.setTribunaOccidental(0)
tribu.setTribunaOriental(0)
tribu.opera()


cliente.guardarClientes(100015, "eutimito", 300089455, 15)
compras.guardar(222, 2, 100015)



compras.consultarCompra(100015)