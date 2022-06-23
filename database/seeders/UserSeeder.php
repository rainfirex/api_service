<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            ['email' => Str::random(10).'@mail.com', 'password' => Hash::make('123456'), 'api_token' => Str::random(80)],
            ['email' => Str::random(10).'@mail.com', 'password' => Hash::make('123456'), 'api_token' => Str::random(80)],
            ['email' => Str::random(10).'@mail.com', 'password' => Hash::make('123456'), 'api_token' => Str::random(80)]
        ]);

    }
}
