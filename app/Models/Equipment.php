<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    use HasFactory;

    public $timestamps = false;

    #protected $table = "equipments";

    protected $fillable = [
        'serialnumber', 'note', 'type_device_id'
    ];

    public function typeEquipment(){
        return $this->belongsTo(TypeEquipment::class);
    }
}
