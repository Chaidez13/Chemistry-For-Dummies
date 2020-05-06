
<<<<<<< HEAD
=======
function fullScreen(){
	alert("Recomendamos jugar en pantalla completa, puede habilitar el modo pantalla completa utilizando la tecla F11");
}
>>>>>>> b9d92d26c7931ba5acf3ea4655c22b1235d3cccb
function obtenerElementos() {
	var datos = [];
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.getJSON({
		url: '/memorama/elementos',
		async: false
	}, (data) => {
		for (var i = 0; i < 118; i++) {
			datos.push({
				"bloque": data[i].groupBlock,
				"simbolo": data[i].symbol,
				"nombre": data[i].name
			});
		}
	});
	return datos;
}
function cargarNivel() {
	var nivel = 0;
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.getJSON({
		url: '/tetris/get',
		async: false,
	}, (data) => {
		nivel = data;
	});
	if(nivel>=1)
		return nivel;
	else
		return 1;
}
function cargarPuntos(nivel) {
	var datos = 0;
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.getJSON({
		url: '/partida/datos',
		async: false,
		data: {
			'idJuego': 1,
			'nivel': nivel,
		}
	}, (data) => {
		datos = data[0].puntos;
	});
	
	if(datos!=null)
		return  datos;
	else
		return 0;
}

function guardarPartida(point, level) {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		type: "POST",
		url: "/partida/store",
		data: {
			'idJuego': 1,
			'idUsuario': -1,
			'nivel': level,
			'puntos': point,
		},
		success: function(data) {}
	});
}

function actualizarPartida(point, level, estado) {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		type: "POST",
		url: "/partida/update/1",
		data: {
			'puntos': point,
			'nivel': level,
			'estado': estado,
		},
		success: function(data) {
		}
	});
}
function obtenerElementos() {
	var datos = [];
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.getJSON({
		url: '/memorama/elementos',
		async: false
	}, (data) => {
		for (var i = 0; i < 118; i++) {
			datos.push({
				"bloque": data[i].groupBlock,
				"simbolo": data[i].symbol,
				"nombre": data[i].name
			});
		}
	});
	return datos;
}

function cargarPuntos(nivel) {
	var datos = 0;
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.getJSON({
		url: '/partida/datos',
		async: false,
		data: {
			'idJuego': 1,
			'nivel': nivel,
		}
	}, (data) => {
		datos = data[0].puntos;
	});

	return datos;
}

function guardarPartida(point, level) {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		type: "POST",
		url: "/partida/store",
		data: {
			'idJuego': 1,
			'idUsuario': -1,
			'nivel': level,
			'puntos': point,
		},
		success: function(data) {}
	});
}

function actualizarPartida(point,progreso, level, estado) {
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});
	$.ajax({
		type: "POST",
		url: "/partida/update/1",
		data: {
			'puntos': point,
			'nivel': level,
			'estado': estado,
			'progreso': progreso
		},
		success: function(data) {
		}
	});
}