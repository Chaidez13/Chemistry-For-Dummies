<?php

namespace App\Http\Controllers\Api;
use App\Partida;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class PartidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partida = Partida::all();
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

       
        if(Partida::where('idJuego', $partida['idJuego'])->where('nivel',$partida['nivel'])->count()==0)
            Partida::create($partida);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {


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
        ]);
        Partida::where('idJuego',$id)->where('nivel',$datos['nivel'])->update(['puntos' => $datos['puntos']]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
