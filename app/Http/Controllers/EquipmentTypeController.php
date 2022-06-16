<?php

namespace App\Http\Controllers;

use App\Http\Resources\EquipmentTypeCollection;
use App\Models\TypeEquipment;
use App\Service\SearchService;

class EquipmentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        if(Request()->query->has('name_type') || Request()->query->has('mask_serialnumber')){
            return response(SearchService::findEquipmentType(Request()->query));
        }
        return response(new EquipmentTypeCollection(TypeEquipment::paginate(5)));
    }
}