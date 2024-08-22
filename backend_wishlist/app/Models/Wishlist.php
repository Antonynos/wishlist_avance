<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    protected $table = 'wishlist';

    protected $fillable = [
        'nome',
        'users_id',
    ];

    protected $casts = [
        'users_id' => 'integer',
    ];

    public function users()
    {
        return $this->belongsTo(\App\Models\Users::class);
    }
}
