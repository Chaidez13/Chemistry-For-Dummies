<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
| 
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('duolingo/respuestas' , 'Api\RespuestaController@index');
Route::get('duolingo/respuestas/{id}' , 'Api\RespuestaController@show');
Route::POST('duolingo/pregunta/store' , 'Api\PreguntaController@store');
Route::get('memorama/elementos','Api\ElementoController@index');
Route::POST('/reporte/store','Api\ReporteController@store');
Route::POST('/registro/user','Api\UserController@store');
