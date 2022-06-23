<?php

namespace App\Service;

use App\Http\Resources\EquipmentCollection;
use App\Http\Resources\EquipmentUpdateResource;
use App\Models\Equipment;
use App\Models\TypeEquipment;

class EquipmentService
{
    private $parser;
    private $createdId = [];
    private $updateEquipment;

    /**
     * EquipmentService constructor.
     * @param array $equipments
     */
    public function __construct(array $equipments)
    {
        $this->parser = new DataParse($equipments);
        $this->parser->parse();
    }

    /**
     * Сохранить коллекцию моделий
     *
     * @return EquipmentService
     */
    public function store(): self {
        $successData = $this->parser->getSuccessData();

        if($successData){
            foreach ($successData as $data){
                $equipment_data = $data['equipment'];

                $equipment = Equipment::create([
                    'serialnumber'   => $equipment_data['serialnumber'],
                    'note'           => $equipment_data['note'],
                    'type_equipment_id' => $equipment_data['type_equipment_id']
                ]);

                $this->createdId[] = $equipment->id;
            }
        }
        return $this;
    }

    /**
     * Обновить модель
     *
     * @param int $id
     * @return EquipmentService
     */
    public function update(int $id): self{
        $successData = $this->parser->getSuccessEquipmentOne();

        $type = TypeEquipment::findOrFail($id);
        if ($successData) {
            $type->name_type = $successData['name_type'];
            $type->mask_serialnumber = $successData['mask_serialnumber'];
            $type->equipment->serialnumber = $successData['serialnumber'];
            $type->equipment->note = $successData['note'];
            $type->push();

            $this->updateEquipment = $type->equipment;
        }
        return $this;
    }

    /**
     * Получить новую коллекцию
     *
     * @return EquipmentCollection
     */
    public function getCollection(): EquipmentCollection{
        $failData = $this->parser->getFailData();


        $collection = new EquipmentCollection(Equipment::whereIn('id', $this->createdId)->get());
        $collection->additional(['fail' => $failData]);

        return $collection;
    }

    /**
     * Получить обновленный ресурс
     *
     * @return EquipmentUpdateResource
     */
    public function getResource(): EquipmentUpdateResource{
        $failData = $this->parser->getFailData();

        $resourse = new EquipmentUpdateResource($this->updateEquipment);
        $resourse->additional(['fail' => $failData]);

        return $resourse;
    }
}
