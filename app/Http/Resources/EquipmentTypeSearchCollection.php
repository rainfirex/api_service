<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EquipmentTypeSearchCollection extends ResourceCollection
{
    public $collects = EquipmentTypeResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $array['data_search'] = parent::toArray($request);

        $paginate['paginate'] = [
            'current_page' => $this->currentPage(),
            'per_page'     => $this->perPage(),
            'url'          => $this->path(),
            'page_name'    => $this->getPageName(),
            'total'        => $this->total(),
            'last_page'    => $this->lastPage(),
        ];

        return array_merge($array, $paginate);
    }
}
