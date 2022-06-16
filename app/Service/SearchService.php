<?php

namespace App\Service;

use App\Http\Resources\EquipmentTypeSearchCollection;
use App\Models\TypeEquipment;
use Symfony\Component\HttpFoundation\InputBag;
use App\Http\Resources\EquipmentSearchCollection;
use App\Models\Equipment;

class SearchService
{
    /**
     * Поиск по серийнику или примечанию
     *
     * @param InputBag $query
     * @return EquipmentSearchCollection
     */
    public static function findEquipment(InputBag $query): EquipmentSearchCollection
    {
        $paramName = null;

        if ($query->has('serialnumber')){
            $paramName = 'serialnumber';
        }
        elseif ($query->has('note')){
            $paramName = 'note';
        }

        $value = trim(Request()->query->get($paramName));

        $collection = Equipment::where($paramName, 'LIKE', "%{$value}%")
                ->paginate(5);

        return new EquipmentSearchCollection($collection);
    }

    /**
     * Поиск по типу или маске
     *
     * @param InputBag $query
     * @return EquipmentTypeSearchCollection
     */
    public static function findEquipmentType(InputBag $query): EquipmentTypeSearchCollection{
        $paramName = null;

        if ($query->has('name_type')){
            $paramName = 'name_type';
        }
        elseif ($query->has('mask_serialnumber')){
            $paramName = 'mask_serialnumber';
        }

        $value = trim(Request()->query->get($paramName));

        $collection = TypeEquipment::where($paramName, 'LIKE', "%{$value}%")
            ->paginate(5);

        return new EquipmentTypeSearchCollection($collection);
    }
}