<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reporte extends Model
{
    
     protected $fillable = [
        'idUsuario','idJuego','mensaje'
    ];
    
}