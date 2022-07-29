/**
 * Ejemplo de cómo instanciar una clase dentro de otra, haciendo uso de lo aprendido en esta 
 */

class Avengers {
    nuevoAvenger(hero) {
        console.log(`Bienvenido ${hero} al equipo de avengers`);
    }
}

class Superhero {
    constructor() {
        this.name = ''; //Nombre del héroe
        this.alias = ''; //Nombre de héroe
        this.heroes = []; //Características del héroe

        this.avenger = new Avengers() //Instancia de clase 
    }

    create(name, alias) {
        this.name = name;
        this.alias = alias;

        if (prompt('Desea convertirlo en avenger? ') == 'si') {
            this.avenger.nuevoAvenger(alias);
        }
        this.saveHeroe(this.alias);
    }

    createPowers(power) {
        const myPowers = this.heroes[this.alias].powers;
        myPowers.push(power)

    }

    getHero() {
        return this.name;
    }

    saveHeroe() {
        this.heroes[this.alias] = {
            name: this.name,
            alias: this.alias,
            powers: []
        }
    }

    getHeroes() {
        return this.heroes;
    }
}

const hero = new Superhero()
let continueLoop = false;

console.log("Vamos a comenzar... Crearemos nuestros heroes \n")
    //Vamos a crear un ciclo principal para crear nuestros heroes
do {
    let name = prompt('Cual es la identidad de nuestro heroe?');
    let alias = prompt('Que nombre le vamos a poner a nuestro heroe?');

    hero.create(name, alias);

    console.log(`\n El universo de heroes ha creado a ${hero.getHero()}, pero tu le vas a dar poderes \n`)
    do {
        hero.createPowers(prompt("Ingrese un poder"))
        continueLoop = prompt("Desea agregar mas poderes?") == 'no' ? false : true
    } while (continueLoop)


    console.log(`${hero.getHero()} ha recibido sus poderes`)



    continueLoop = prompt("Te gustaría crear un nuevo heroe?") == 'no' ? false : true
} while (continueLoop)


console.log("\n Lista de Herores ")
console.log(hero.getHeroes())