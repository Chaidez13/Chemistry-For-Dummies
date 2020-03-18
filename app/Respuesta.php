<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
class Respuesta extends Model
{
	protected $table = 'respuesta';
     protected $fillable = [
        'idPregunta','respuesta'
    ];

    public function pregunta(){
    	return $this->belongsTo("App\Pregunta" , 'idPregunta');
    }

}
