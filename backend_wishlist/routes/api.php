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

//WISHLIST
Route::get('/wishlist', 'WishlistController@index');
Route::get('/wishlist/{id}', 'WishlistController@show');
Route::get('/wishlist_contents/{id}', 'WishlistController@show_produto_by_wishlist');
Route::post('/wishlist', 'WishlistController@create_wishlist');
Route::put('/wishlist/{id}', 'WishlistController@update_wishlist');
Route::delete('/wishlist/{id}', 'WishlistController@delete_wishlist');


//WISHLISTPRODUTO
Route::get('/wishlist_produto', 'WishlistProdutoController@index');
Route::get('/wishlist_produto/{id}', 'WishlistProdutoController@show');
Route::post('/wishlist_produto', 'WishlistProdutoController@create_wishlist_produto');
Route::put('/wishlist_produto/{id}', 'WishlistProdutoController@update_wishlist_produto');
Route::delete('/wishlist_produto/{id}', 'WishlistProdutoController@delete_wishlist_produto');
