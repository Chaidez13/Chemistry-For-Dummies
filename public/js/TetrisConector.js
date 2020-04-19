

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

function actualizarPartida(point, level) {
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
        },
        success: function(data) {
            console.log(data);
        }
    });
}
