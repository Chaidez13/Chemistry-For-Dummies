<?php

namespace App\Http\Controllers\Api;
use App\Partida;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
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

    public function topTenPerGame(){
        $tetris = DB::table('partida')
           ->join('user', 'partida.idUsuario', '=', 'user.id')
           ->select('user.nombre','user.apellidoPaterno', 'partida.puntos')
           ->where('partida.idJuego', '=', 1)
           ->where('partida.puntos','>',0)
           ->orderBy('puntos','DESC')
           ->distinct('user.nombre')
           ->limit(10)
           ->get();
        $memorama = DB::table('partida')
           ->join('user', 'partida.idUsuario', '=', 'user.id')
           ->select('user.nombre','user.apellidoPaterno', 'partida.puntos')
           ->where('partida.idJuego', '=', 2)
           ->where('partida.puntos','>',0)
           ->orderBy('puntos','DESC')
           ->distinct('user.nombre')
           ->limit(10)
           ->get();
        $trivia = DB::table('partida')
           ->join('user', 'partida.idUsuario', '=', 'user.id')
           ->select('user.nombre','user.apellidoPaterno', 'partida.puntos')
           ->where('partida.idJuego', '=', 3)
           ->where('partida.puntos','>',0)
           ->orderBy('puntos','DESC')
           ->distinct('user.nombre')
           ->limit(10)
           ->get();
        return response()->json(['tetris'=> $tetris,'memorama' => $memorama, 'trivia' => $trivia]);
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
       if(Partida::where('idJuego', $partida['idJuego'])->where('nivel',$partida['nivel'])->where('idUsuario',$idUsuario)->count()==0){
            Partida::create($partida);
       }
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
