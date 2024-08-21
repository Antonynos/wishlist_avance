<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos;


class ProdutosController extends Controller
{
    public function index(Request $request){
        $produtos = Produtos::all();
        return response()->json($produtos, 200);
    }

    public function show($id){
        $produtos = Produtos::find($id);
        return response()->json($produtos, 200);
    }

    public function create_produto(Request $request){
        $produtos = new Produtos;

        $produtos->fill($request->all());
        $produtos->save();

        return response()->json($produtos, 201);
    }

    public function update_produto(Request $request, $id){
        $produtos = Produtos::find($id);

        $produtos->fill($request->all());
        $produtos->save();

        return response()->json($produtos, 200);
    }

    public function delete_produto($id){
        $produtos = Produtos::find($id);

        $produtos->delete();

        return response()->json($produtos, 200);
    }
}
