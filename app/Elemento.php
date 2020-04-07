<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Elemento extends Model
{
    protected $fillable = ['name','atomicNumber', 'symbol','atomicMass','groupBlock','cpkHexColor','state'];
}
