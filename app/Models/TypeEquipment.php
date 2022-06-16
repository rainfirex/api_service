<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeEquipment extends Model
{
    use HasFactory;

    public $timestamps = false;

    #protected $table = "type_equipments";

    protected $fillable = [
        'name_type', 'mask_serialnumber'
    ];

    public function equipment(){
        return $this->hasOne(Equipment::class);
    }
}
