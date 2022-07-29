/*
Crear un algoritmo que venda boletas de futbol, solo para las localidades oriental y occidental, el cliente 
debe estar previamente registrado, de no ser asi, el sistema deberá solicitar su registro. 
Al registrarse debera continuar con la compra. 

Si el cliente esta registrado, debera seleccionar la localidad que desea (1 para oriental, 2 para occidental), 
Por cada tribuna solo se va a vender 50 boletas y por cada cliente solo se puede vender un maximo de 3 boletas.
*/

// PRO-TIP: Hacer uso de condicionales, loops (si es necesario, claro), switches, excepciones, etc.
class menu {

    constructor() {
        this.menuOpt = 0;
        this.subMenuOpt = 0;
        this.flagExMenu = false;
    }

    startUp() {
        var info = alert("Bienvenido, elige la siguiente opcion disponible:\n1. A\n2. B");
        var menuOpt = prompt("Opción:\n");
        while (this.flagExMenu = true) {
            switch (this.menuOpt) {
                case 1:
                    console.log('test')
                    this.flagExMenu = true;
                    break;
                default:
                    console.log('error')
                    this.flagExMenu = false;
                    break;
            }


        }
    }



}

class clnts {

    constructor() {
        this.clientes = [];
    }

    svClnts(id, nombre, cc, telefono, edad) {
        this.clientes[id] = { id, nombre, cc, telefono, edad }
    }

    fndClnts(id) {
        return this.clientes[id];
    }

}

class lcldd {

    constructor() {
        this.cntdrTrbnOcc = 0;
        this.cntdrTrbnOrn = 0;
        this.res = 0;
        this.opr = '';
    }

    oprtn() {
        console.log('Tiquetes reservados para las siguientes tribunas: \nTribuna Occidental: $(this.cntdrTrbnOcc) \nTribuna Oriental: $(this.cntdrTrbnOrn)')
    }

}

const test = new lcldd();
test.oprtn();
const main = new menu();
main.startUp();