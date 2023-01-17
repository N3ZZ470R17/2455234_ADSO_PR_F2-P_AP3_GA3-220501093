var name = ["Nombre"];
var desc = ["Descripcion"];
item = [name, desc];
var flagLoop = false;
var flagReg = "";
var menu = "";
var flagMenu = true;

console.log("Inicio");
do {
	console.log("Ciclo")
	let name = prompt("Nombre del objeto");
	let desc = prompt("Descripcion del objeto");
	let flagReg = prompt("Agregar nuevo item?");
	if (flagReg == "no") {
		flagLoop = false;
		console.log(`${item}`);
		console.log("Fin");
	} else {
		console.log("Loop!");
		item.push(name, desc);
		console.log(`${item}`);
		flagLoop = true;
	}
} while (flagLoop)



