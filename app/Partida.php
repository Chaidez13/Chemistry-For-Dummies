<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partida extends Model
{
    protected $fillable = [
        'idJuego','idUsuario','nombre','puntos'
    ];
}
