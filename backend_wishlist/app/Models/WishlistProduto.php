<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WishlistProduto extends Model
{
    use HasFactory;

    protected $table = 'wishlist_produto';

    protected $fillable = [
        'wishlist_id',
        'produtos_id',
    ];

    protected $casts = [
        'wishlist_id' => 'integer',
        'produtos_id' => 'integer',
    ];

    public function Wishlist()
    {
        return $this->belongsTo(\App\Models\Wishlist::class);
    }

    public function Produtos()
    {
        return $this->belongsTo(\App\Models\Produtos::class);
    }
}
