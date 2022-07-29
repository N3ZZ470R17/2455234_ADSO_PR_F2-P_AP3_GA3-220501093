/**
 * Ejemplo creado para asimilación del ejemplo hecho en la sesión sincrónica del día 07/07/2022 a las 18:00 - 20:00
 */

class testA {
    newItem(itm) {
        console.log(`El item ${itm} ha sido añadido al inventario`)
    }
}

class testB {
    constructor() {
        this.name = '';
        this.desc = '';
        this.items = [];

        this.inventory = new testA();
    }

    spawn(name, desc) {
        this.name = name;
        this.desc = desc;

        if (prompt('Desea añadirlo al inventario? ') == 'si') {
            this.inventory.newItem(desc);
        }
        this.saveItem(this.desc);
    }

    spawnChars(charS) {
        const myChars = this.items[this.desc].chars;
        myChars.push(charS)
    }

    getItem() {
        return this.name;
    }


}
const inv = new testB()
let flagA = false;
let more = false;

console.log('\nIniciando proceso de cración de items....\n')
    // Creado un ciclo para crear nuestros items
do {
    let name = prompt('Que nombre tendrá este item?: ');
    let desc = prompt('Que descripcion tendrá este item?: ');
    inv.spawn(name, desc);
    flagA = prompt('Crear otro item?') == 'no' ? false : true;

    console.log('\nEl item ${inv.getName()} ha sido generado')
    do {
        inv.createChars(prompt("Ingresa una caracteristica"));
        more = prompt("Desea agregar mas caracteristicas?") == 'no' ? false : true;
    } while (more)

} while (flagA)