<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partida extends Model
{
	protected $table = 'partida';
    protected $fillable = [
        'idJuego','idUsuario','nivel','puntos','estado','progreso'
    ];

    public function user()
    {
        return $this->belongsTo('App\User','idUsuario')->withDefault();
    }
}
