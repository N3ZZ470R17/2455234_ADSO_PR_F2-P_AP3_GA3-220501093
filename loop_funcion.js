class invT{
	revolution(){
		this.name = ["Nombre"];
		this.desc = ["Descripcion"];
		this.item = [this.name, this.desc];
		this.flagLoop = false;
		this.flagReg = "";

console.log("Inicio");
do{
	console.log("Ciclo")
	 let name = prompt("Nombre del objeto");
	 let desc = prompt("Descripcion del objeto");
	 let flagReg = prompt("Agregar nuevo item?");
	if(flagReg == "no"){
		this.flagLoop = false;
		console.log(`${this.item}`);
		console.log("Fin");
	}else{
		console.log("Loop!");
		this.item.push(name, desc);
		console.log(`${this.item}`);
		this.flagLoop = true;
	}
}while(this.flagLoop)
}
	menu(){
		this.menu = "";
		this.menu = prompt("¿Desea iniciar el ciclo o el contador?")
		switch (this.menu){
			case "ciclo":
				this.revolution();
				break;
			case "contador":
				this.countdown();
				break;
			default:
				console.log("Ejecutame otra vez, no te entendi...");
				break;
		}
	}

	countdown(){
		for (let n = Math.floor(Math.random() * 60); n > 0; n = n-1) {
			console.log("It\'s the final countdown.");
			console.log(`${n}`);
		}
	}
}

const main = new invT();
main.menu()
