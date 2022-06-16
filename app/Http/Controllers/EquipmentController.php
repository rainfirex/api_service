<?php

namespace App\Http\Controllers;

use App\Http\Requests\EquipmentCollectionRequest;
use App\Http\Requests\EquipmentRequest;
use App\Http\Resources\EquipmentPaginateCollection;
use App\Http\Resources\EquipmentResource;
use App\Models\Equipment;
use App\Service\EquipmentService;
use App\Service\SearchService;

class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Request()->query->has('serialnumber') || Request()->query->has('note')){
            return response(SearchService::findEquipment(Request()->query));
        }
        return response(new EquipmentPaginateCollection(Equipment::paginate(5)));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  EquipmentCollectionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EquipmentCollectionRequest $request)
    {
        $data = $request->all();

        $service = new EquipmentService($data['equipments']);

        return response($service->store()->getCollection());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response(new EquipmentResource(Equipment::findOrFail($id)));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  EquipmentRequest  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EquipmentRequest $request, int $id)
    {
        $data[] = $request->all();

        $service = new EquipmentService($data);

        return response($service->update($id)->getResource());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $equipment = Equipment::findOrFail($id);
        $type = $equipment->typeEquipment();

        $equipment->delete();
        $type->delete();

        return response()->json(['result' => true]);
    }
}
