<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EquipmentUpdateResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(!empty($this->additional['meta'])){
            return ['fail' => $this->additional['fail']];
        }

        return [
            'id'             => $this->id,
            'serialnumber'   => $this->serialnumber,
            'note'           => $this->note,
            'type_equipment' => new EquipmentTypeResource($this->typeEquipment)
        ];
    }

}