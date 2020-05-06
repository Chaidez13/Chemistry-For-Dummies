<?php

namespace App\Http\Controllers\Api;
use App\Partida;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
class PartidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::user()->id;
        $partida = Partida::where('idUsuario', $id)->get();
        return $partida;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $partida = $request->validate([
            'idJuego' => 'required',
            'idUsuario' => 'required',
            'nivel' => 'required',
            'puntos' => 'required',
        ]);
       $idUsuario = Auth::user()->id;
       $partida['idUsuario'] = $idUsuario;
<<<<<<< HEAD
       if(Partida::where('idJuego', $partida['idJuego'])->where('nivel',$partida['nivel'])->where('idUsuario',$idUsuario)->count()==0)
            Partida::create([
                'idJuego' => $partida['idJuego'],
                'idUsuario' => $partida['idUsuario'],
                'nivel' => $partida['nivel'],
                'puntos' => $partida['puntos'], 
                'estado' => 1,
                'progreso' =>0, 
            ]);
=======
       if(Partida::where('idJuego', $partida['idJuego'])->where('nivel',$partida['nivel'])->where('idUsuario',$idUsuario)->count()==0){
            Partida::create($partida);
       }
>>>>>>> b9d92d26c7931ba5acf3ea4655c22b1235d3cccb
        else
            return 'La partida existe';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){


    }

    public function obtenerDatosPartida(Request $request){
        $partida = $request->validate([
            'idJuego' => 'required',
            'nivel' => 'required',
        ]);
        $id = Auth::user()->id;
        $datos = Partida::where('idJuego', $partida['idJuego'])->where('nivel',$partida['nivel'])->where('idUsuario',$id)->get();

        return $datos;
    }

    public function search(Request $request, $id){
    $datos = $request->validate([
            'nivel' => 'required',
        ]);
        $partida = Partida::where('idJuego', $id)->where('nivel',$datos['nivel']);

        return partida;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $datos = $request->validate([
            'puntos' => 'required',
            'nivel' => 'required',
            'estado' => 'required',
            'progreso' => 'required',
        ]);
        $idUser = Auth::user()->id;
        Partida::where('idJuego',$id)->where('nivel',$datos['nivel'])->where('idUsuario',$idUser)
        ->update(['puntos' => $datos['puntos'],
                  'estado' => $datos['estado'],
                  'progreso' => $datos['progreso']
                  ]);
    }   

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $id = Auth::user()->id;
        Partida::where('idUsuario',$id)->delete();
    }
}
