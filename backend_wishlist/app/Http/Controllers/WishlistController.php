<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;

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
