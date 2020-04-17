var datos = [];

function gets() {
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
}

function cargarPuntos(nivel) {

    var datos;
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.getJSON({
        url: '/partida',
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
    var url = "/partida/store";
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
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
    var url = "/partida/update/1";
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
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