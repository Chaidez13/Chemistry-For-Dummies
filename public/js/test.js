
var datos = [];
function gets(){
     $.getJSON({url: 'data.json', async: false}, (data) => {
     		for (var i=0; i<118; i++) {
     			datos.push({
     				"bloque": data[i].groupBlock,
     				"simbolo": data[i].symbol,
     				"nombre": data[i].name
     			});
     		}
      });
}

function crearPartida(point, level, created){
	var url;

  if(!created){
    url = "/api/duolingo/partida/store"
  }else{
    = "/api/duolingo/partida/update"
  }
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data:{
           		'idJuego': 1,
           		'idUsuario': 1,
              'nivel': level,
              'puntos': point;
           }, 
           success: function(data)             
           {           
           }
       });
}

function getData(){
 gets();
 return datos;
}
