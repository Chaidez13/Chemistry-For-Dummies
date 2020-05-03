$(document).ready(function(){
var tabla = [];
var logros = [];
var data = obtenerElementos();
var progreso = 0,contadorDePiezas=0;
var piezas = [];
var puntos = 0,
	puntosGuardados = 0;
var salud = 250,
	damage = 25;
PImage vidaIcono, fondo;
Logro logro, logroPuntos, logroActual;
Elemento actual;
Menu menu;
var altoTabla = 9;
var opcion = -1;
var created = false;
var nivel = cargarNivel();
var typed = '';
var confirmar;
var continuar = true,
	activarMenu = false,
	ganar = false,
	perder = false,
	logoOtorgado = false,
	oldLogro = false,
	nowLogro = false,
	sovLogro = false,
	pumpLogro = false;
var tablero = [
	["0", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1"],
	["2", "3", "", "", "", "", "", "", "", "", "", "", "4", "5", "6", "7", "8", "9"],
	["10", "11", "", "", "", "", "", "", "", "", "", "", "12", "13", "14", "15", "16", "17"],
	["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"],
	["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53"],
	["54", "55", "", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85"],
	["86", "87", "", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117"],
	["", "", "","57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", ""],
	["", "", "", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", ""],
];

void setup() {
	size(1261, 1000);
	crearMatriz();
	menu = new Menu();
	if(nivel!=5)
		fondo = loadImage("src/fondo.jpg");
	else
		fondo = loadImage("src/fondo_5.jpg");

	vidaIcono = loadImage("src/vida.png");
	frameRate(30);
}

void draw() {
	background(0);
	image(fondo, 0, 0);
	if (!created) {
		guardarPartida(puntos, nivel);
		llenarMatriz();
		actual = elementoNivel(nivel);
		created = true;
		puntosGuardados = cargarPuntos(nivel);
	}

	if (actual != null) {
		if(nivel>5) nivel = 1;
		progreso = Math.trunc((contadorDePiezas/118)*100);
		if (actual.y >= 1000 && salud > 0) {
			salud -= damage;
			if (puntos > 0)
				puntos -= 5;
		}
		pintarTabla();
		actual.paint();
		if (!menu.activo)
			actual.move();
		actual.setVisible();
	} else {
		menu.activo = true;
		ganar = true;
	}
	textSize(16);
	vidas(10, 30, salud);
	marcador("puntos:",puntos, 1130, 130);
	marcador("Record:",puntosGuardados, 1130, 230);
	if (!continuar) {
		menu.activo = true;
		menu.mostrar(mouseX, mouseY, "pause");
	}
	if (ganar) {
		menu.mostrar(mouseX, mouseY, "ganar");
		if (opcion != -1) {
			actualizarPuntos(puntos, 100 ,puntosGuardados, nivel, 1);
			nextLevel();
		}
	}
	if (perder) {
		menu.mostrar(mouseX, mouseY, "perder");
		if (opcion != -1) {
			actualizarPuntos(puntos, progreso,puntosGuardados, nivel, 0);
			puntosGuardados = cargarPuntos(nivel);
			reset();
		}
	}
	if (!logoOtorgado && (puntos > puntosGuardados) && puntosGuardados > 0) {
		var h = 900;
		if (logros.length > 0) {
			h = 800;
			logros.push(new Logro(2, 910, h, 683, 171, 25, width, 0));
		} else {
			logros.push(new Logro(2, 910, 900, 683, 171, 25, width, 40));
		}

		actualizarPuntos(puntos,progreso ,puntosGuardados, nivel, 0);
		puntosGuardados = puntos;
		logoOtorgado = !logoOtorgado;
	}
	for (var i = 0; i < logros.length; i++) {
		if (logros[i] != null) {
			logros[i].show();
			if (logros[i].end()) {
				logros[i] = null;
			}
		} else
			logros.shift();
	}
}

void actualizarPuntos(puntos,progreso, puntosGuardados, nivel, estado) {
	if (puntos > puntosGuardados+1) {
		actualizarPartida(puntos,progreso,nivel, 0);
	}
}

void mouseClicked() {
	if (menu.activo) {
		switch (menu.opcion(mouseX, mouseY)) {
			case 0:
				menu.activo = false;
				continuar = true;
				opcion = 1;
				return 1;
				break;
			case 1:
				window.location.replace("/");
				break;
			default:
				opcion = -1;
				break;
		}
	}

}

void keyPressed() {
	if ((key == 'p' || key == 'P') && (!perder || !ganar)) {
		menu.activo = !menu.activo;
		continuar = !continuar;
	}

	if (!menu.activo && actual != null) {
		if (keyCode == LEFT)
			if ((actual.x - actual.h) >= 0)
				actual.x -= actual.h;

		if (keyCode == RIGHT)
			if ((actual.x + actual.h * 2) <= width)
				actual.x += actual.h;

		if (keyCode == DOWN) {
			downSound();
			if (down.currentTime <= 0)
				actual.y += actual.h;
		}
		if (key == ' ') {
			let simbol = actual.simbolo;
			if (encontrado((actual.x) + actual.h, actual.y, simbol)) {
				++contadorDePiezas;
				matchSound();
				actual.agregar();
				actual = elementoNivel(nivel);
				puntos += damage;
			} else {
				errorSound();
				if (salud > 0)
					salud -= damage;
				else {
					perder = true;
					menu.activo = true;
				}
				if (puntos > 0)
					puntos -= 5;
				actual.x = 350;
				actual.y = 0;
			}
		}
	}

}

void keyTyped() {
	typed += String.fromCharCode(key);
	var match = typed.match(/old|now|end|soviet|foster/g);
	if (match == 'old' || match == 'now' || match == 'soviet' || match == 'foster') {
		if (match == 'old') {
			oldMusic();
			if (!oldLogro) {
				puntos += 100;
				logros.push(new Logro(1, 910, 900, 683, 171, 25, width, 40));
				oldLogro = !oldLogro;
			}
		} else if (match == 'now') {
			nowMusic();
			if (!nowLogro) {
				puntos += 100;
				logros.push(new Logro(0, 910, 900, 683, 171, 25, width, 40));
				nowLogro = !nowLogro;
			}
		} else if (match == 'soviet') {
			soviet();
			if (!sovLogro) {
				puntos += 100;
				logros.push(new Logro(3, 910, 900, 683, 171, 25, width, 40));
				sovLogro = !sovLogro;
			}
		} else {
			pumped();
			if (!pumpLogro) {
				puntos += 100;
				logros.push(new Logro(4, 910, 900, 683, 171, 25, width, 40));
				pumpLogro = !pumpLogro;
			}
		}
		typed = '';
	} else if (match == 'end') {
		stopAll();
		typed = '';
	}
}

void reset() {
	piezas = [];
	tabla = [];
	salud = 250;
	puntos = 0;
	ganar = false;
	perder = false;
	created = false;
	continuar = true;
	menu.activo = false;
	logoOtorgado = false;
	contadorDePiezas = 0;
	opcion = -1;
	crearMatriz();
}


void crearMatriz() {
	for (var i = 0; i < altoTabla; i++) {
		tabla[i] = new Array(18);
	}

}

void pintarTabla() {
	for (var i = 0; i < altoTabla; i++) {
		for (var j = 0; j < 18; j++) {
			if (tablero[i][j] != "") {
				tabla[i][j].paint();
			}
		}
	}
}

void llenarMatriz() {
	var desfaseX = 0,
		desfaseY = 0,
		espacio = 369,
		h = 70;
	let x = 350,
		y = 0;
	for (var i = 0; i < altoTabla; i++) {
		desfaseY = (i * h);
		for (var j = 0; j < 18; j++) {
			if (tablero[i][j] != "") {
				piezas.push(new Elemento(parseInt(tablero[i][j]) + 1, data[tablero[i][j]].simbolo, data[tablero[i][j]].nombre,
					data[tablero[i][j]].bloque, x, y, h, 0, 1, true, nivel));
				tabla[i][j] = new Elemento(parseInt(tablero[i][j]) + 1, data[tablero[i][j]].simbolo, data[tablero[i][j]].nombre,
					data[tablero[i][j]].bloque, (j * h), desfaseY + espacio, h, 0, 0, nivel);
				if (nivel == 3)
					tabla[i][j].setVisible();
			}
		}
	}
}

function elementoRandom() {
	var index, length = piezas.length
	for (var i = 0; i < length; i++) {
		index = int(random(length) - 1);
		Elemento element = piezas[index];
		if (!element.agregado)
			return piezas[index];
		else
			continue;
	}
	return null;
}

function vidas(x, y, vida) {	
	if (vida >= 50 && vida <= 100)
		fill(229, 101, 13);
	else if (vida <= 50) {
		fill(229, 36, 13);
	} else
		fill(59, 229, 13);
	stroke(1);
	rect(x, y, vida, 30,8);
	stroke(3);
	fill(255,50);
	rect(x, y, 250, 30,8);
	fill(0);
	textSize(18);
	fill(255);
	//Progreso
	stroke(1);
	fill(255,50);
	rect(x, y+60, 250, 30,8);
	stroke(1);
	fill(59, 229, 13);
	rect(x, y+60, progreso*2.5, 30,8);
	fill(255);
	text("Nivel  " + nivel, x + 40, y - 5);
	text("Progreso  " + progreso + "%", x + 60,  y + 53);
	textFont(createFont("Comic sans ms", 20));
}

function marcador(title,points, x, y) {
	fill(255);
	textFont(createFont("Comic sans ms", 32));
	text(title+""+points, x, y);
}



function elementoNivel(nivel) {
	switch (nivel) {
		case 1:
		case 2:
			return piezas.shift();
		case 3:
		case 4:
		case 5:
			return elementoRandom();
		default:
			break;
	}
}
void nextLevel() {
	if (nivel < 5) {
		nivel++;
		reset();
	}
}

function encontrado(x, y, simbolo) {
	for (var i = 0; i < altoTabla; i++) {
		for (var j = 0; j < 18; j++) {
			if (tablero[i][j] != "") {
				Elemento elemento = tabla[i][j];
				if ((x >= elemento.x && x <= (elemento.x + elemento.h)) && ((y >= elemento.y && y <= (elemento.y + elemento.h)) ||
						(y + elemento.h >= elemento.y && y + elemento.h <= (elemento.y + elemento.h))) && (elemento.simbolo == simbolo)) {
					elemento.nivel = 1;
					elemento.setVisible();
					return true;
				}
			}
		}
	}
	return false;
}

});