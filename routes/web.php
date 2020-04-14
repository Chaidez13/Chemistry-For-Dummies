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
  Route::get('/user/datos','Api\UserController@index');
  Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
  Route::GET('/partida' , 'Api\PartidaController@index');
  Route::POST('/partida/store','Api\PartidaController@store');
  Route::POST('/partida/update/{id}','Api\PartidaController@update');
  Route::GET('trivia/respuestas' , 'Api\RespuestaController@index');
  Route::GET('trivia/respuestas/{id}' , 'Api\RespuestaController@show');
  Route::POST('trivia/pregunta/store' , 'Api\PreguntaController@store');
  Route::GET('memorama/elementos','Api\ElementoController@index');
  Route::POST('/reporte/store','Api\ReporteController@store');
});
Route::POST('/login','Auth\LoginController@login');
Route::POST('/registro/user','Api\UserController@store');





