<?php

namespace App\Http\Controllers;
use Session;
use Illuminate\Session\Store;
use Illuminate\Http\Request;

class TetrisController extends Controller
{
    public function setLevel(Request $request){
        $nivel = $request->validate([
            'nivel' => 'required',
        ]);
        session(['nivel' => $nivel['nivel']]);
    }

    public function getLevel(){
        return Session::get('nivel');
    }
}
