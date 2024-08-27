<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;
use App\Models\WishlistProduto;
use App\Models\Produtos;

class WishlistController extends Controller
{
    public function index(Request $request){
        $wishlist = Wishlist::all();
        return response()->json($wishlist, 200);
    }

    public function show($id){
        $wishlist = Wishlist::find($id);
        return response()->json($wishlist, 200);
    }

    public function show_produto_by_wishlist($id){
        $wishlist= Wishlist::find($id);
        $arrayProduto = array();

        $wishlist_produto = WishlistProduto::where('wishlist_id', $wishlist->id)->get();
        foreach($wishlist_produto as $elemento_wishlist){
            $produto = Produtos::find($elemento_wishlist->produtos_id);
            $produto->wishlist_produto_id = $elemento_wishlist->id;
            $arrayProduto[] = $produto;
        }

        return response()->json($arrayProduto, 200);
    }

    public function create_wishlist(Request $request){
        $wishlist = new Wishlist;

        $wishlist->fill($request->all());
        $wishlist->save();

        return response()->json($wishlist, 201);
    }

    public function update_wishlist(Request $request, $id){
        $wishlist = Wishlist::find($id);

        $wishlist->fill($request->all());
        $wishlist->save();

        return response()->json($wishlist, 200);
    }

    public function delete_wishlist($id){
        $wishlist = Wishlist::find($id);

        $wishlist->delete();

        return response()->json($wishlist, 200);
    }
}
