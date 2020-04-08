
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

function sendData(point, level){
	var url = "/api/duolingo/pregunta/store";
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data:{
           		'pregunta': point,
           		'nivel': level
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
