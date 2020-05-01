<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TetrisController extends Controller
{
    public function setLevel(Request $request){
        $nivel = $request->validate([
            'nivel' => 'required',
        ]);
        Session::put('nivel',$nivel['nivel']);
    }

    public function getLevel(){
        return Session::get('nivel');
    }
}
