<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class WishlistProduto extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wishlist_produto', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('wishlist_id');
            $table->index(["wishlist_id"], 'fk_wishlist_wishlist_produto_idx');

            $table->foreign('wishlist_id', 'fk_wishlist_wishlist_produto_idx')
                ->references('id')->on('wishlist')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedBigInteger('produtos_id');
            $table->index(["produtos_id"], 'fk_produtos_wishlist_produto_idx');

            $table->foreign('produtos_id', 'fk_produtos_wishlist_produto_idx')
                ->references('id')->on('produtos')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wishlist_produto');
    }
}
