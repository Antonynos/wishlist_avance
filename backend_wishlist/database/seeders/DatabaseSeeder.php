<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'adminTeste',
            'email' => 'admin@admin.com',
            'password' => 12345,
        ]);

        DB::table('produtos')->insert([
            'nome' => 'Colher',
            'foto' => 'https://images.pexels.com/photos/2062687/pexels-photo-2062687.jpeg',
        ]);

        DB::table('produtos')->insert([
            'nome' => 'Faca',
            'foto' => 'https://images.pexels.com/photos/237996/pexels-photo-237996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ]);

        DB::table('produtos')->insert([
            'nome' => 'Canivete',
            'foto' => 'https://images.pexels.com/photos/1000836/pexels-photo-1000836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ]);

        DB::table('produtos')->insert([
            'nome' => 'Escova',
            'foto' => 'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg',
        ]);
    }
}
