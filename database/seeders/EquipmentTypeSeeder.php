<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EquipmentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_equipment')->insert([
            ['name_type' => 'TP-Link TL-WR74',  'mask_serialnumber' => 'XXAAAAAXAA'],
            ['name_type' => 'D-Link DIR-300',   'mask_serialnumber' => 'NXXAAXZXaa'],
            ['name_type' => 'D-Link DIR-300 S', 'mask_serialnumber' => 'NXXAAXZXXX']
        ]);
    }
}
