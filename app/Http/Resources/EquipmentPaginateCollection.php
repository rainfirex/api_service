<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EquipmentPaginateCollection extends ResourceCollection
{
    public $collects = EquipmentResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $array['data'] = parent::toArray($request);

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
