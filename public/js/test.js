var datos = [];

function gets() {
    $.getJSON({
        url: 'data.json',
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
}

function cargarPuntos(nivel) {
    var datos;
    $.getJSON({
        url: 'api/partida',
        async: false
    }, (data) => {
        for (var i = 0; i < data.length; i++) {
            if (nivel == data[i].nivel)
                datos = data[i].puntos;
        }
    });
    return datos;
}

function guardarPartida(point, level) {
    var url = "api/partida/store";
    $.ajax({
        type: "POST",
        url: url,
        data: {
            'idJuego': 1,
            'idUsuario': 1,
            'nivel': level,
            'puntos': point,
        },
        success: function(data) {}
    });
}

function actualizarPartida(point, level) {
    var url = "api/partida/update/1";
    $.ajax({
        type: "POST",
        url: url,
        data: {
            'puntos': point,
            'nivel': level,
        },
        success: function(data) {

        }
    });
}

function getData() {
    gets();
    return datos;
}