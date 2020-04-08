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

//Route::get('/respuestas','RespuestaController@index');

Route::get('/', function () {	
  return view('welcome');
});
Route::get('/options', function () {	
  return view('welcome');
});
Route::get('/dashboard', function () {	
  return view('welcome');
});

Route::get('/tetris', function () {	
  return view('tetris.index');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
