<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
	protected $table = "Pregunta";
    protected $fillable = [
        'pregunta','nivel'
    ];
}
