<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {      
        return Auth::user();
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
        $user = $request->validate([
            'nombre' => 'required',
            'apellidoPaterno' => 'required', 
            'apellidoMaterno' => 'required',
            'email' => 'required',
            'password' => 'required', 
            'fecha' => 'required', 
        ]);
        User::create([
            'nombre' => $user['nombre'],
            'apellidoPaterno' => $user['apellidoPaterno'], 
            'apellidoMaterno' => $user['apellidoMaterno'],
            'email' => $user['email'],
            'password' => Hash::make($user['password']), 
            'fecha' => $user['fecha'], 
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuario = User::find($id);
        return $usuario;
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

    public function checkEmail($email)
    {
        $user = User::all()->where('email', $email)->first();
        if ($user) 
            return 'El correo electrónico ya existe';
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
        /*$this->validate([
            'nombre' => 'required',
            'apellidoPaterno' => 'required', 
            'apellidoMaterno' => 'required',
            'email' => 'required',
            'password' => 'required', 
            'fecha' => 'required', 
            'tipo' => 'required',
        ]);
        $usuario = User::find($id)->update($request->all());*/
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
    }
}
