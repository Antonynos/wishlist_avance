<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//PRODUTOS
Route::get('/produtos', 'ProdutosController@index');
Route::get('/produtos/{id}', 'ProdutosController@show');
Route::post('/produtos', 'ProdutosController@create_produto');
Route::put('/produtos/{id}', 'ProdutosController@update_produto');
Route::delete('/produtos/{id}', 'ProdutosController@delete_produto');
