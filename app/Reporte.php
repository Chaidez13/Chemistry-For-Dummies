<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reporte extends Model
{
    protected $table = 'reporte';
     protected $fillable = [
        'idUsuario','juego','mensaje'
    ];
    
}
