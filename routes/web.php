<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {	
  return view('welcome');
});
Route::get('/options', function () {	
  return view('welcome');
});
Route::get('/dashboard', function () {	
  return view('welcome');
});
Route::get('/usuario', function () {	
  return view('welcome');
});
Route::get('game/trivia', function () {	
  return view('welcome');
});
Route::get('game/memoria', function () {	
  return view('welcome');
});
Route::get('game/tetris', function () {	
  return view('welcome');
});
Route::get('/tetris', function () {	
  return view('tetris.index');
});
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
Route::middleware('auth')->group(function () {
  Route::GET('/user/datos','Api\UserController@index'); //Retorona datos del usuario
  Route::GET('/logout', '\App\Http\Controllers\Auth\LoginController@logout'); //Cierra la sesión activa
  Route::GET('/partida' , 'Api\PartidaController@index'); //Obtiene los datos de las partidas
  Route::POST('/partida/store','Api\PartidaController@store'); //Guarda los datos de la partida
  Route::POST('/partida/update/{id}','Api\PartidaController@update'); //Actualiza los datos de la partida {id}
  Route::GET('/trivia/respuestas' , 'Api\RespuestaController@index'); //obtiene las preguntas y respuestas
  Route::GET('/memorama/elementos','Api\ElementoController@index'); //Obtiene los elementos JSON
  Route::POST('/reporte/store','Api\ReporteController@store'); //Guarda los reportes
  Route::GET('/partida/datos','Api\PartidaController@obtenerDatosPartida');
  Route::GET('/partida/all','Api\PartidaController@index');
  Route::POST('/user/resetPassword','Api\UserController@changePassword');
  Route::POST('/user/delete',"Api\UserController@destroy");
  Route::POST('/partida/delete',"Api\PartidaController@destroy"); 
  Route::POST('/tetris/level','TetrisController@setLevel');
  Route::GET('/tetris/get','TetrisController@getLevel');

});
Route::POST('/login','Auth\LoginController@login'); //Inicio de sesión
Route::POST('/registro/user','Api\UserController@store'); //Registro de usuario





