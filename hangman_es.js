class Ahorcado {
  constructor() {
    this.jugadores = [];
    this.bandera = false;
    this.palabras = ["aurelio", "inocencio", "guillermo", "sena", "adso"];  
  }

  generarPalabra(){
    const palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    const raya_piso = palabra.replace(/./g, "_ ");
    return [palabra, raya_piso]
  }

  iniciar(){
    let num = 1;

    do {
      this.jugadores.push(prompt(`Ingrese heroe ${num}`));
      this.bandera = prompt("Desea agregar mas ayudantes? ") == 'si' ? true : false;
      num++;
    } while (this.bandera)

    if(this.jugadores.length){
      this.bandera = false;
      console.log("\n**********************\n");
      console.log("COMENCEMOS EL JUEGO  \n ");

      this.jugar();
    }
    
  }

  jugar(){
    for(let jugador = 0; jugador < this.jugadores.length; jugador++){
      console.log(`Ahora ${this.jugadores[jugador]} elige el destino del condenado`)

      const palabra = this.generarPalabra();
      const adivinaPalabra = palabra[1].split(' ');
      let intentos = 1;
      let perdio;

      console.log("\Rescatalo, solo tienes 3 intentos para salvarlo!");
      console.log(adivinaPalabra.join(' '))
      do{
        if(adivinaPalabra.join('') == palabra[0]){
          console.log(`Yay, ahora vera el lindo atardecer :\)`);
          break;
        }
        const letra = prompt('¿Cual?');
        const coincidencia = palabra[0].indexOf(letra)
 
        if(coincidencia >= 0){
          for(let x = 0; x < palabra[0].length; x++){
            if(letra == palabra[0][x]){
              adivinaPalabra[x] = letra
            }
          }
        }else{
          console.log(`\n¡NO!, le has fallado, van ${intentos} de 3 intentos`);
          if(intentos == 3){
            console.log(`\n¡Lo condenaste!, ahora ya no verá el atardecer :\(`);
          }
          intentos++
        }
        console.log(adivinaPalabra.join(' '));
      }while(intentos < 4)

     }    
  }
}


const game = new Ahorcado();
game.iniciar()