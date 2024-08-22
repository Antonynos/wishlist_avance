<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WishlistProduto;
use App\Models\Wishlist;
use App\Models\Produto;

class WishlistProdutoController extends Controller
{
    public function index(Request $request){
        $wishlist_produto = WishlistProduto::all();
        return response()->json($wishlist_produto, 200);
    }

    public function show($id){
        $wishlist_produto = WishlistProduto::find($id);
        return response()->json($wishlist_produto, 200);
    }

    public function create_wishlist_produto(Request $request){
        $wishlist_produto = new WishlistProduto;

        $wishlist_produto->fill($request->all());
        $wishlist_produto->save();

        return response()->json($wishlist_produto, 201);
    }

    public function update_wishlist_produto(Request $request, $id){
        $wishlist_produto = WishlistProduto::find($id);

        $wishlist_produto->fill($request->all());
        $wishlist_produto->save();

        return response()->json($wishlist_produto, 200);
    }

    public function delete_wishlist_produto($id){
        $wishlist_produto = WishlistProduto::find($id);

        $wishlist_produto->delete();

        return response()->json($wishlist_produto, 200);
    }
}
